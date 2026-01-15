export default function sitemap() {
  const baseUrl = 'https://www.meroladecarvalhoadvocacia.com';
  
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
