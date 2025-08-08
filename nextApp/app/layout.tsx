import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const tinos = Source_Serif_4({
  variable: "--font-tinos",
  weight: ["400", "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Dan Hoffman, LCSW. Official Therapy Wesbite",
  description: "Dan Hoffman, LCSW. psychothereapy private sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tinos.variable}`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
