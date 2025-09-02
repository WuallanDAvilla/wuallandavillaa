import type { Project, ContactFormData } from "../types";

const API_BASE_URL = "http://localhost:3001/api"; // Ajuste a URL se necessário

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${API_BASE_URL}/projects`);
  if (!response.ok) {
    throw new Error("Falha ao carregar os projetos.");
  }
  return response.json();
};

export const sendContactMessage = async (
  formData: ContactFormData
): Promise<{ message: string }> => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Falha ao enviar a mensagem.");
  }
  return response.json();
};
