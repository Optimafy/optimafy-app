import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Enable payload for base64 image uploads
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

// Groq API Key configuration (Models: qwen/qwen3.8-27b, openai/gpt-oss-120b)
const groqApiKey = process.env.GROQ_API_KEY || '';

// System prompt for OPTIMAFY AI Business Consultant
const OPTIMAFY_SYSTEM_INSTRUCTION = `Você é o Consultor Sênior de Crescimento e Tecnologia da OPTIMAFY.
A OPTIMAFY transforma a tecnologia no melhor funcionário de pequenas e médias empresas (PMEs).
Criamos soluções digitais de alto nível que organizam a rotina do empresário, colocam a marca em destaque e fazem o negócio lucrar mais, sem que ele precise entender de programação.

REGRAS DE COMUNICAÇÃO:
1. NUNCA use jargões técnicos complicados (evite termos como Framework, API, Next.js, escalabilidade de servidor, backend, frontend, algoritmos, etc.).
2. USE termos de negócios: Lucro, Controle, Mais tempo livre para o dono, Visibilidade, Imagem de empresa grande, Fim da dor de cabeça, Vendas no piloto automático.
3. USE analogias práticas:
   - "Fazemos o seu sistema de vendas conversar sozinho com o seu financeiro."
   - "É como ter um assistente administrativo que não dorme, não tira férias e não erra."
   - "Sua vitrine 24 horas que transforma visitantes em clientes pagantes."
4. Ajude o dono do negócio a calcular quantas horas e dinheiro ele perde com trabalho braçal e como organizar a casa com ferramentas simples e visuais.
5. Brevidade: Responda de maneira clara, mantendo sempre a média de 100 a 150 palavras por resposta. Evite texto muito longo.
6. Tom: Empático, elegante, seguro, focado em retorno financeiro e tranquilidade.`;

// 1. Multi-turn Chat Endpoint with Groq API (qwen/qwen3.8-27b, openai/gpt-oss-120b)
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, model = 'qwen/qwen3.8-27b', systemInstruction } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Array "messages" é obrigatório.' });
    }

    if (!groqApiKey) {
      return res.status(500).json({
        error: 'GROQ_API_KEY não configurada no arquivo .env. Obtenha sua chave gratuita em console.groq.com.',
      });
    }

    const validModels = [
      'qwen/qwen3.8-27b',
      'openai/gpt-oss-120b',
    ];
    const selectedModel = validModels.includes(model) ? model : 'qwen/qwen3.8-27b';

    const formattedMessages = [
      {
        role: 'system',
        content: systemInstruction || OPTIMAFY_SYSTEM_INSTRUCTION,
      },
      ...messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content,
      })),
    ];

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: selectedModel,
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      return res.status(groqResponse.status).json({
        error: `Erro na API Groq: ${errorText}`,
      });
    }

    const data: any = await groqResponse.json();
    const reply = data.choices?.[0]?.message?.content || 'Sem resposta gerada pelo modelo Groq.';

    return res.json({ reply, modelUsed: selectedModel });
  } catch (error: any) {
    console.error('Erro na rota /api/chat:', error);
    return res.status(500).json({
      error: error?.message || 'Erro interno ao processar conversa com Groq.',
    });
  }
});

// 2. Image Understanding Endpoint (Uses qwen/qwen3.8-27b)
app.post('/api/analyze-image', async (req: Request, res: Response) => {
  try {
    const { imageBase64, prompt } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Campo "imageBase64" é obrigatório.' });
    }

    if (!groqApiKey) {
      return res.status(500).json({
        error: 'GROQ_API_KEY não configurada no arquivo .env.',
      });
    }

    // Parse da imagem em base64: extrai o mimeType e somente os dados puros (removendo prefixo data URI e quebras de linha)
    const raw = String(imageBase64).trim();

    let mimeType = 'image/png';
    let base64Data = raw;

    if (raw.startsWith('data:')) {
      const match = raw.match(/^data:([^;]+);base64,(.*)$/s);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      } else {
        const commaIndex = raw.indexOf(',');
        base64Data = commaIndex !== -1 ? raw.slice(commaIndex + 1) : raw;
      }
    }

    // Remove espaços em branco, quebras de linha ou caracteres espúrios
    base64Data = base64Data.replace(/\s+/g, '');

    // Valida se os dados restantes são base64 válido
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(base64Data)) {
      return res.status(400).json({
        error: 'Os dados da imagem não estão em um formato base64 válido.',
      });
    }

    const defaultPrompt =
      'Analise esta imagem (print de planilha, tela de sistema, processo manual, anotações ou site atual) sob a perspectiva de negócios da OPTIMAFY. ' +
      'Identifique em linguagem simples e direta: 1) Onde o dono da empresa está perdendo tempo ou dinheiro; 2) Riscos de erros humanos e retrabalho; ' +
      '3) Como transformar essa rotina em um fluxo automático sem dor de cabeça; 4) Oportunidade para aumentar as vendas e o controle do negócio.' + 
      '5) Brevidade: Responda de maneira clara, mantendo sempre a média de 100 a 150 palavras por resposta. Evite texto muito longo.';

    const userPrompt = prompt && prompt.trim().length > 0 ? prompt : defaultPrompt;

    const formattedImageUrl = `data:${mimeType};base64,${base64Data}`;

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: [
          {
            role: 'system',
            content: OPTIMAFY_SYSTEM_INSTRUCTION,
          },
          {
            role: 'user',
            content: [
              { type: 'text', text: userPrompt },
              {
                type: 'image_url',
                image_url: {
                  url: formattedImageUrl,
                },
              },
            ],
          },
        ],
        temperature: 0.5,
        max_tokens: 1024,
      }),
    });

    if (!groqResponse.ok) {
      const errText = await groqResponse.text();
      return res.status(groqResponse.status).json({
        error: `Erro na API Groq Vision: ${errText}`,
      });
    }

    const data: any = await groqResponse.json();
    const analysis =
      data.choices?.[0]?.message?.content || 'Nenhuma análise gerada pelo modelo Qwen.';

    return res.json({ analysis, modelUsed: 'qwen/qwen3.8-27b' });
  } catch (error: any) {
    console.error('Erro na rota /api/analyze-image:', error);
    return res.status(500).json({
      error: error?.message || 'Erro ao analisar imagem.',
    });
  }
});

// 3. Contact Form Submission Endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, contact, message, lgpd, marketing } = req.body;

    if (!name || !contact || !message) {
      return res.status(400).json({ error: 'Campos nome, contato e mensagem são obrigatórios.' });
    }

    if (!lgpd) {
      return res.status(400).json({ error: 'Consentimento da LGPD é obrigatório.' });
    }

    console.log(`[OPTIMAFY Contato] Mensagem recebida de ${name} (${contact}):`);
    console.log(`> Mensagem: ${message}`);
    console.log(`> Marketing: ${marketing ? 'Sim' : 'Não'} | LGPD: ${lgpd ? 'Sim' : 'Não'}`);

    const recipient = process.env.CONTACT_DESTINATION_EMAIL || 'contato@optimafy.net';

    // If RESEND_API_KEY is configured in local .env, dispatch live email
    if (process.env.RESEND_API_KEY) {
      try {
        const resendResp = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'OPTIMAFY Site <contato@optimafy.net>',
            to: [recipient],
            reply_to: contact.includes('@') ? contact : recipient,
            subject: `Novo Contato do Site OPTIMAFY: ${name}`,
            html: `
              <h2>Novo Contato Recebido</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>Contato:</strong> ${contact}</p>
              <p><strong>Mensagem:</strong> ${message}</p>
            `,
          }),
        });
        if (!resendResp.ok) {
          console.error('[Resend Error]', await resendResp.text());
        }
      } catch (e) {
        console.error('[Resend Dispatch Error]', e);
      }
    }

    return res.json({
      success: true,
      message: 'Mensagem enviada com sucesso para contato@optimafy.net!',
      recipient,
    });
  } catch (error: any) {
    console.error('Erro na rota /api/contact:', error);
    return res.status(500).json({
      error: error?.message || 'Erro interno ao processar formulário de contato.',
    });
  }
});

// Vite middleware in dev or static serving in production
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`OPTIMAFY Server rodando com Groq IA em http://localhost:${PORT}`);
  });
}

startServer();
