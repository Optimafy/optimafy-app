interface Env {
  RESEND_API_KEY?: string;
  CONTACT_DESTINATION_EMAIL?: string;
}

// ── Helper: send email via Resend or MailChannels ──────────────────────────
async function sendEmail(
  env: Env,
  { to, replyTo, subject, html }: { to: string; replyTo?: string; subject: string; html: string }
) {
  if (env.RESEND_API_KEY) {
    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'OPTIMAFY Site <contato@optimafy.net>',
        to: [to],
        reply_to: replyTo || to,
        subject,
        html,
      }),
    });

    if (!resendResp.ok) {
      const errText = await resendResp.text();
      console.error('Erro Resend:', errText);
    }
  } else {
    try {
      await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to, name: 'OPTIMAFY Contato' }] }],
          from: { email: 'contato@optimafy.net', name: 'Site OPTIMAFY' },
          subject,
          content: [{ type: 'text/html', value: html }],
        }),
      });
    } catch (mcErr) {
      console.warn('Mailchannels fallback error:', mcErr);
    }
  }
}

// ── Main handler ───────────────────────────────────────────────────────────
export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  try {
    const { request, env } = context;
    const body = (await request.json()) as any;
    const recipientEmail = env.CONTACT_DESTINATION_EMAIL || 'contato@optimafy.net';

    // ── Newsletter subscription ────────────────────────────────────────
    if (body.type === 'newsletter') {
      const email = (body.email || '').trim();

      if (!email) {
        return new Response(
          JSON.stringify({ error: 'O campo e-mail é obrigatório.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      const newsletterSubject = `Nova Inscrição Newsletter — ${email}`;
      const newsletterHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #c4a97d; background-color: #0a0a0a; color: #f5f0eb;">
          <h2 style="color: #c4a97d; border-bottom: 1px solid #333; padding-bottom: 10px;">Nova Inscrição na Newsletter — OPTIMAFY</h2>
          <p style="font-size: 15px;">O seguinte e-mail se inscreveu para receber dicas e novidades:</p>
          <div style="margin-top: 16px; padding: 15px; background-color: #141414; border-left: 3px solid #c4a97d;">
            <p style="margin: 0; font-size: 16px; color: #e0e0e0;"><strong>E-mail:</strong> ${email}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #222; margin: 25px 0;" />
          <p style="font-size: 11px; color: #888;">Enviado automaticamente pelo formulário de newsletter do site OPTIMAFY (optimafy.net).</p>
        </div>
      `;

      await sendEmail(env, {
        to: recipientEmail,
        replyTo: email,
        subject: newsletterSubject,
        html: newsletterHtml,
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Inscrição realizada com sucesso!',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ── Contact form (default) ─────────────────────────────────────────
    const { name, contact, message, lgpd, marketing } = body;

    if (!name || !contact || !message) {
      return new Response(
        JSON.stringify({ error: 'Campos nome, contato e mensagem são obrigatórios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!lgpd) {
      return new Response(
        JSON.stringify({ error: 'O consentimento com os termos da LGPD é obrigatório.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailSubject = `Novo Contato do Site OPTIMAFY: ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #c4a97d; background-color: #0a0a0a; color: #f5f0eb;">
        <h2 style="color: #c4a97d; border-bottom: 1px solid #333; padding-bottom: 10px;">Novo Contato Recebido — OPTIMAFY</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Contato (E-mail / Telefone):</strong> ${contact}</p>
        <p><strong>Aceite LGPD:</strong> ${lgpd ? 'Sim' : 'Não'}</p>
        <p><strong>Autorização Marketing:</strong> ${marketing ? 'Sim' : 'Não'}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #141414; border-left: 3px solid #c4a97d;">
          <h4 style="margin-top: 0; color: #c4a97d;">Mensagem:</h4>
          <p style="white-space: pre-wrap; color: #e0e0e0;">${message}</p>
        </div>
        <hr style="border: 0; border-top: 1px solid #222; margin: 25px 0;" />
        <p style="font-size: 11px; color: #888;">Enviado a partir do formulário de contato oficial do site OPTIMAFY (optimafy.net).</p>
      </div>
    `;

    await sendEmail(env, {
      to: recipientEmail,
      replyTo: contact.includes('@') ? contact : recipientEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        recipient: recipientEmail,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error?.message || 'Erro ao processar envio de email no Cloudflare.',
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
