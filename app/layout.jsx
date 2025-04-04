import "./globals.css";

//Import Components
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

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
          {/* Background layer - fixed and behind everything */}
          <div 
            className="fixed inset-0 -z-50"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(200, 200, 200, 1)),  
                url("/logo.png")
              `,  
              backgroundRepeat: 'no-repeat',                     
              backgroundSize: 'cover',                 
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              filter: 'blur(5px)',
              transform: 'scale(1.05)',
            }}
          />
          
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
