import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  NavBar  from "@/app/components/NavBar";
import "@/app/styles/global.scss";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Stack Developer",
  description: "Full-stack .NET developer combining server-side expertise in C# and ASP.NET Core with frontend skills in JavaScript, React, and modern CSS. I create seamless web experiences backed by solid .NET foundations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} body-container`}
      >
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
