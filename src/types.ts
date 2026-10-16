export type ModelType =
  | 'qwen/qwen3.8-27b'
  | 'openai/gpt-oss-120b';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  modelUsed?: string;
}

export interface ImageAnalysisResult {
  analysis: string;
  modelUsed: string;
  timestamp: string;
  imageUrl?: string;
}

export const blogCategories = [
  'Automação',
  'Presença Digital (Web)',
  'IA',
  'Business Intelligence (Análise de Dados)',
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: BlogCategory;
  thumbnail: string;
  tags: string[];
  author: BlogAuthor;
  content: string;
}