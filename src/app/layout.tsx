import WhatsappButton from "@/components/common/WhatsappButton";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Header from "../../components/layout/Header";
import WhatsappButton from "../../components/common/WhatsappButton";
import "../../globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
 title: "Bespoke Backdrops & Props",
 description: "Luxury handcrafted event décor in South Africa",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
 return (
  <html lang="en">
   <head />
   <body className={inter.className}>
    <Header />
    {children}
    <WhatsappButton />
   </body>
  </html>
 );
}
