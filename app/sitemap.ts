export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap() {
  return [
    { url: 'https://optimafy.net', changeFrequency: 'monthly' as const, priority: 1 },
    { url: 'https://optimafy.net/solucoes', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: 'https://optimafy.net/sobre', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://optimafy.net/contato', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://optimafy.net/politica-de-privacidade', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://optimafy.net/politica-de-cookies', changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: 'https://optimafy.net/termos-de-uso', changeFrequency: 'yearly' as const, priority: 0.3 },
  ]
}
