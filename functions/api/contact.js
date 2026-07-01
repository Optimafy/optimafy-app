// functions/api/contact.js
import { Resend } from "resend";

export async function onRequestPost(context) {
  const { request, env } = context;

  console.log("API chamada com método:", request.method);
  console.log("RESEND_API_KEY está definida?", !!env.RESEND_API_KEY);

  const resend = new Resend(env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, contact, message, lgpd, marketing } = body;

    if (!name || !contact || !message || !lgpd) {
      return new Response(
        JSON.stringify({ error: "Dados inválidos." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    await resend.emails.send({
      from: "Optimafy <contato@optimafy.net>",
      to: "optimafy@gmail.com",
      subject: `[SITE] Contato pelo site - ${name}`,
      html: `
        <h2>Contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Contato:</strong> ${contact}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
        <hr>
        <p>LGPD: ${lgpd ? "Sim" : "Não"}</p>
        <p>Marketing: ${marketing ? "Sim" : "Não"}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Erro ao enviar." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}