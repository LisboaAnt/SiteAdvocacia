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
  title: "Elaine Merola Advocacia",
  description: "Escritório de Advocacia",
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
