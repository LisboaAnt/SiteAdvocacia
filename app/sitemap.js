export default function sitemap() {
  const baseUrl = 'https://site-advocacia-mu.vercel.app';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
