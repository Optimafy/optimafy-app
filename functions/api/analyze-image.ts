interface Env {
  GROQ_API_KEY?: string;
}

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
    const { imageBase64, prompt } = body;

    if (!imageBase64) {
      return new Response(
        JSON.stringify({ error: 'Campo "imageBase64" é obrigatório.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse da imagem: extrai apenas os dados base64 (remove prefixo data URI)
    // e valida antes de enviar para o modelo.
    const raw = String(imageBase64).trim();

    let mimeType = 'image/png';
    let base64Data = raw;

    if (raw.startsWith('data:')) {
      const match = raw.match(/^data:([^;]+);base64,(.*)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      } else {
        const commaIndex = raw.indexOf(',');
        base64Data = commaIndex !== -1 ? raw.slice(commaIndex + 1) : raw;
      }
    }

    base64Data = base64Data.replace(/\s+/g, '');

    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(base64Data)) {
      return new Response(
        JSON.stringify({ error: 'Os dados da imagem não estão em um formato base64 válido.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const formattedImageUrl = `data:${mimeType};base64,${base64Data}`;

    const defaultPrompt =
      'Analise esta imagem (print de planilha, tela de sistema, processo manual, anotações ou site atual) sob a perspectiva de negócios da OPTIMAFY. ' +
      'Identifique em linguagem simples e direta: 1) Onde o dono da empresa está perdendo tempo ou dinheiro; 2) Riscos de erros humanos e retrabalho; ' +
      '3) Como transformar essa rotina em um fluxo automático sem dor de cabeça; 4) Oportunidade para aumentar as vendas e o controle do negócio.';

    const userPrompt = prompt && prompt.trim().length > 0 ? prompt : defaultPrompt;

    const systemPrompt =
      'Você é o Consultor de Negócios da OPTIMAFY. Responda em português simples, focado em lucro, economia de tempo e tranquilidade para o dono de PME. NUNCA use jargões técnicos difíceis.';

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
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
      return new Response(
        JSON.stringify({
          error: `Erro da API Groq Vision: ${groqResponse.status} - ${errText}`,
        }),
        { status: groqResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = (await groqResponse.json()) as any;
    const analysis =
      data.choices?.[0]?.message?.content || 'Nenhuma análise gerada pelo modelo Qwen.';

    return new Response(
      JSON.stringify({
        analysis,
        modelUsed: 'qwen/qwen3.8-27b',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error?.message || 'Erro ao processar visão com Groq no Cloudflare.',
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
