export interface Project {
  id: number;
  category: "web" | "mobile" | "automation";
  title: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
