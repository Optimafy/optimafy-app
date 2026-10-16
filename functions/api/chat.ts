interface Env {
  GROQ_API_KEY?: string;
}

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
5. Tom: Empático, elegante, seguro, focado em retorno financeiro e tranquilidade.`;

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  try {
    const { request, env } = context;
    const apiKey = env.GROQ_API_KEY || '';

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: 'Chave GROQ_API_KEY não configurada nas variáveis de ambiente da Cloudflare.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = (await request.json()) as any;
    const { messages, model = 'qwen/qwen3.8-27b', systemInstruction } = body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Array "messages" é obrigatório.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Supported Groq models
    const validModels = [
      'qwen/qwen3.8-27b',
      'openai/gpt-oss-120b',
    ];
    const selectedModel = validModels.includes(model) ? model : 'qwen/qwen3.8-27b';

    // Format messages for OpenAI/Groq format
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
        'Authorization': `Bearer ${apiKey}`,
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
      const errText = await groqResponse.text();
      return new Response(
        JSON.stringify({
          error: `Erro da API Groq: ${groqResponse.status} - ${errText}`,
        }),
        { status: groqResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = (await groqResponse.json()) as any;
    const reply = data.choices?.[0]?.message?.content || 'Sem resposta gerada pelo modelo Groq.';

    return new Response(
      JSON.stringify({
        reply,
        modelUsed: selectedModel,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error?.message || 'Erro interno no Cloudflare Function ao processar chat Groq.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const onRequestOptions = async (): Promise<Response> => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
