export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://www.meroladecarvalhoadvocacia.com/sitemap.xml',
  };
}
