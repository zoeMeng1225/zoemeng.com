import type { Metadata } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import { ScrollToTop } from "@/components/ui/Scrolltotop";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zoemeng.com"),
  title: "Zoe Meng - Frontend Engineer | UX/UI Developer",
  description:
    "Frontend engineer in the SF Bay Area specializing in UX/UI, designing and building responsive, accessible web interfaces with React and TypeScript.",
  openGraph: {
    title: "Zoe Meng - Frontend Engineer",
    description:
      "Frontend engineer in the SF Bay Area specializing in UX/UI, designing and building responsive, accessible web interfaces with React and TypeScript.",
    url: "https://zoemeng.com",
    siteName: "Zoe Meng",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
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
      data-scroll-behavior="smooth"
    >
      <body className="font-body bg-bg-primary text-text-primary antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
