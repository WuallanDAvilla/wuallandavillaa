import { Request, Response } from "express";
import { Project } from "../models/Project.js";

const projectsData: Project[] = [
  {
    id: 1,
    category: "web",
    title: "Sistema de E-commerce",
    images: [
      "https://placehold.co/800x500/1f2937/9ca3af?text=Página+Inicial",
      "https://placehold.co/800x500/1f2937/9ca3af?text=Página+do+Produto",
      "https://placehold.co/800x500/1f2937/9ca3af?text=Carrinho",
    ],
    description:
      "Plataforma de e-commerce completa com foco na experiência do usuário e performance.",
    challenge:
      "O cliente precisava de uma plataforma de vendas online robusta, capaz de gerenciar inventário, processar pagamentos de forma segura e oferecer uma experiência de compra fluida.",
    solution:
      "Desenvolvi uma API RESTful com Node.js e um front-end com React, criando uma interface dinâmica e responsiva. A integração com a API da Stripe garantiu a segurança nas transações.",
    results:
      "A implementação resultou em um aumento de 20% na taxa de conversão de vendas e uma nota de 95/100 no Google PageSpeed Insights.",
    tech: ["React", "Node.js", "MySQL", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  // Adicione mais projetos aqui para que a API os sirva dinamicamente
];

export const getProjects = (req: Request, res: Response): void => {
  res.status(200).json(projectsData);
};
