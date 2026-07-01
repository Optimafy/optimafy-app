import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, contact, message, lgpd, marketing } = body;

    if (!name || !contact || !message || !lgpd) {
      return Response.json(
        { error: "Dados inválidos." },
        { status: 400 }
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

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Erro ao enviar." },
      { status: 500 }
    );
  }
}