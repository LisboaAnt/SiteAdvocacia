import "./globals.css";

//Import Components
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundManager from "@/components/BackgroundManager";

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
  title: "Elaine Merola Advocacia | Escritório de Advocacia em Campinas-SP",
  description: "Nossos Serviços Jurídicos: Atuação completa, eficiente e personalizada em Direito Previdenciário (planejamento de aposentadoria, revisão de benefícios, INSS), Direito Civil (contratos, responsabilidade civil, sucessões), Direito do Trabalho (reclamações, rescisões, negociações), Direito Penal (defesa criminal, inquéritos, habeas corpus) e Direito de Família (divórcios, guarda, pensão, mediação). Mais de 30 anos de experiência em Campinas-SP.",
  keywords: [
    "advocacia",
    "escritório de advocacia",
    "advogado Campinas",
    "direito de família",
    "direito cível",
    "direito trabalhista",
    "direito previdenciário",
    "direito penal",
    "constelação familiar",
    "resolução de conflitos",
    "planejamento de aposentadoria",
    "revisão de benefícios",
    "INSS",
    "contratos",
    "responsabilidade civil",
    "sucessão",
    "reclamação trabalhista",
    "rescisão",
    "negociação extrajudicial",
    "defesa criminal",
    "habeas corpus",
    "divórcio",
    "guarda de filhos",
    "pensão alimentícia",
    "mediação familiar",
    "Elaine Merola",
    "Merola de Carvalho"
  ],
  author: "Elaine Merola de Carvalho",
  robots: "index, follow",
  openGraph: {
    title: "Elaine Merola Advocacia | Escritório de Advocacia em Campinas-SP",
    description: "Nossos Serviços Jurídicos: Atuação completa, eficiente e personalizada em Direito Previdenciário (planejamento de aposentadoria, revisão de benefícios, INSS), Direito Civil (contratos, responsabilidade civil, sucessões), Direito do Trabalho (reclamações, rescisões, negociações), Direito Penal (defesa criminal, inquéritos, habeas corpus) e Direito de Família (divórcios, guarda, pensão, mediação). Mais de 30 anos de experiência em Campinas-SP.",
    url: "https://site-advocacia-mu.vercel.app/",
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
      <body className={SenFont.className}>
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
