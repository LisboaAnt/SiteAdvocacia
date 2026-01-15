import "./globals.css";

//Import Components
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundManager from "@/components/BackgroundManager";
import StructuredData from "@/components/StructuredData";

//Added Toast Message
import { Toaster } from "@/components/ui/toaster";

//Themeprovider
import { ThemeProvider } from "@/components/ThemeProvider";

//Font
import { Sen } from "next/font/google"

//Template
import Template from "./template";

const SenFont = Sen({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  display: "swap"
})
export const metadata = {
  metadataBase: new URL('https://www.meroladecarvalhoadvocacia.com'),
  title: "Elaine Merola Advocacia | Escritório de Advocacia em Campinas-SP",
  description: "Nossos Serviços Jurídicos: Atuação completa, eficiente e personalizada em Direito Previdenciário (planejamento de aposentadoria, revisão de benefícios, INSS), Direito Civil (contratos, responsabilidade civil, sucessões), Direito do Trabalho (reclamações, rescisões, negociações), Direito Penal (defesa criminal, inquéritos, habeas corpus) e Direito de Família (divórcios, guarda, pensão, mediação). Mais de 30 anos de experiência em Campinas-SP.",
  keywords: [
    "advocacia Campinas",
    "advogado Campinas",
    "advogada Campinas",
    "escritório de advocacia Campinas",
    "advocacia em Campinas SP",
    "advogado Centro Campinas",
    "advocacia Avenida Campos Sales",
    "direito de família Campinas",
    "direito cível Campinas",
    "direito trabalhista Campinas",
    "direito previdenciário Campinas",
    "direito penal Campinas",
    "advogado INSS Campinas",
    "advogado trabalhista Campinas",
    "advogado família Campinas",
    "advogado previdenciário Campinas",
    "advogado criminal Campinas",
    "resolução de conflitos",
    "planejamento de aposentadoria",
    "revisão de benefícios INSS",
    "contratos Campinas",
    "responsabilidade civil",
    "sucessão Campinas",
    "reclamação trabalhista Campinas",
    "rescisão trabalhista",
    "negociação extrajudicial",
    "defesa criminal Campinas",
    "habeas corpus Campinas",
    "divórcio Campinas",
    "guarda de filhos Campinas",
    "pensão alimentícia Campinas",
    "mediação familiar Campinas",
    "Elaine Merola",
    "Merola de Carvalho",
    "advocacia região de Campinas",
    "advogado interior SP"
  ],
  author: "Elaine Merola de Carvalho",
  robots: "index, follow",
  openGraph: {
    title: "Elaine Merola Advocacia | Escritório de Advocacia em Campinas-SP",
    description: "Nossos Serviços Jurídicos: Atuação completa, eficiente e personalizada em Direito Previdenciário (planejamento de aposentadoria, revisão de benefícios, INSS), Direito Civil (contratos, responsabilidade civil, sucessões), Direito do Trabalho (reclamações, rescisões, negociações), Direito Penal (defesa criminal, inquéritos, habeas corpus) e Direito de Família (divórcios, guarda, pensão, mediação). Mais de 30 anos de experiência em Campinas-SP.",
    url: "https://www.meroladecarvalhoadvocacia.com/",
    siteName: "Elaine Merola Advocacia",
    images: [
      {
        url: "/imgs/logo.png",
        width: 400,
        height: 400,
        alt: "Logo Elaine Merola Advocacia"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Elaine Merola Advocacia | Escritório de Advocacia em Campinas-SP",
    description: "Nossos Serviços Jurídicos: Atuação completa, eficiente e personalizada em Direito Previdenciário (planejamento de aposentadoria, revisão de benefícios, INSS), Direito Civil (contratos, responsabilidade civil, sucessões), Direito do Trabalho (reclamações, rescisões, negociações), Direito Penal (defesa criminal, inquéritos, habeas corpus) e Direito de Família (divórcios, guarda, pensão, mediação). Mais de 30 anos de experiência em Campinas-SP.",
    images: ["/imgs/logo.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
        <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K77WD8PJJ3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K77WD8PJJ3');
            `
          }}
        />
      </head>
      <body className={SenFont.className}>
        {/* Structured Data */}
        <StructuredData />
        <div className="relative">
          {/* Componente de gerenciamento de background com animação */}
          <BackgroundManager />
          
          <Header/>
          <Template>
            {children}  
          </Template>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
