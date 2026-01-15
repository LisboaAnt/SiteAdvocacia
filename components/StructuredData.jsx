export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Elaine Merola Advocacia",
    "image": "https://www.meroladecarvalhoadvocacia.com/imgs/logo.png",
    "description": "Escritório de advocacia em Campinas-SP com mais de 30 anos de experiência. Atuamos em Direito Previdenciário, Civil, Trabalhista, Penal e de Família.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Dr. Campos Sales, 890, sala 104",
      "addressLocality": "Campinas",
      "addressRegion": "SP",
      "postalCode": "13010-903",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.9026",
      "longitude": "-47.0621"
    },
    "url": "https://www.meroladecarvalhoadvocacia.com",
    "telephone": "+5519981056106",
    "email": "elainemerolaadvogada@gmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Campinas",
      "sameAs": "https://pt.wikipedia.org/wiki/Campinas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Jurídicos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Previdenciário",
            "description": "Planejamento de aposentadoria, revisão de benefícios, processos junto ao INSS"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Civil",
            "description": "Contratos, responsabilidade civil, sucessões"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito do Trabalho",
            "description": "Reclamações trabalhistas, rescisões, negociações"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito Penal",
            "description": "Defesa criminal, inquéritos, habeas corpus"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Direito de Família",
            "description": "Divórcios, guarda, pensão alimentícia, mediação"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/m.c.advocacia",
      "https://www.instagram.com/elainemerola"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elaine Merola de Carvalho",
    "jobTitle": "Advogada",
    "worksFor": {
      "@type": "LegalService",
      "name": "Elaine Merola Advocacia"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Campinas",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "email": "elainemerolaadvogada@gmail.com",
    "telephone": "+5519981056106"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
