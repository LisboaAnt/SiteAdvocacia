export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://site-advocacia-mu.vercel.app/sitemap.xml',
  };
}
