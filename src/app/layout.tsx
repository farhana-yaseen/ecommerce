import type { Metadata } from "next";
// import localFont from "next/font/local";
import {Figtree,Fjalla_One} from "next/font/google"
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable:"--font-figtree"
}) ;

const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  variable:"--font-fjalla"
}) ;



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${fjalla.variable} max-w-[1440px] max-h-[4370px] mx-auto`}
      >
        <TopHeader/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
