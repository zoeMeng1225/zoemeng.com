import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets:['latin'],
  variable:"--font-display",
  display:'swap'
})

const outfit = Outfit({
  subsets: ['latin'],
  variable:"--font-body",
  display:'swap'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Zoe Meng - Frontend Engineer",
  description: "Frontend engineer specializing in React, Typescript, and web performance.",
  openGraph:{
    title:"Zoe Meng - Frontend Engineer",
    description: "Frontend engineer specializing in React, Typescript, and web performance.",
    url:'https://zoemeng.com',
    siteName:'Zoe Meng',
    locale:"en_US",
    type:'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-bg-primary text-text-primary antialiased">
          {children}
      </body>
    </html>
  );
}
