import { Request, Response } from "express";

export const handleContactForm = (req: Request, res: Response): void => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "Todos os campos são obrigatórios." });
    return;
  }

  // Em um projeto real, aqui você integraria com um serviço de e-mail (Nodemailer, SendGrid, etc.)
  console.log("--- Nova Mensagem de Contato ---");
  console.log(`Nome: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Mensagem: ${message}`);
  console.log("-------------------------------");

  res.status(200).json({ message: "Mensagem recebida com sucesso!" });
};
