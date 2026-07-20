import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Campos faltando" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Contato <onboarding@resend.dev>",
      to: "carlossouza.ems@gmail.com",
      replyTo: email,
      subject: `Novo contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Falha ao enviar" }, { status: 500 });
  }
}
