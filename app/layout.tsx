import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import DeveloperButton from '../components/DeveloperButton';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solar Brasil - Energia Solar Fotovoltaica",
  description: "Líder em soluções de energia solar fotovoltaica, transformando a luz do sol em economia e sustentabilidade para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={outfit.variable}>
      <body className={outfit.className}>
        {children}
        <DeveloperButton />
      </body>
    </html>
  );
}
