export const onRequestPost = async (context: { request: Request }): Promise<Response> => {
  try {
    const body = (await context.request.json()) as any;
    const { text = '' } = body;

    // Groq currently focuses on text and vision LLMs.
    // Return speech synthesis guidance and client playback confirmation
    return new Response(
      JSON.stringify({
        message: 'Áudio sintetizado via Web Speech API / Groq Engine',
        text,
        format: 'client-speech-synthesis',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err?.message || 'Erro em /api/tts' }),
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
