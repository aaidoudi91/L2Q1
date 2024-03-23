import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EcoPower Drive",
  description: "EcoPower Drive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className='h-full'>
      <body className={cn("relative h-full antialiased", roboto_flex.className)}>
      <main className="relative flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-grow flex-1">
              {children}
          </div>
          <footer // Pied de page
              style={{
                  backgroundColor: "white",
                  padding: "1.3rem",
                  marginTop: "2rem", // Ajout d'une marge supérieure de 2 rem
                  textAlign: "center",
                  border: "1px solid lightgrey",
              }}>
              <p>L2Q1 2023-2024 - Site de e-Commerce</p>
          </footer>
      </main>
      </body>
    </html>
  );
}
