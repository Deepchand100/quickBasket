import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto_Mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "QuickBasket",
  description: "QuickBasket is a simple shopping list app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto_Mono.className}
      >
        {children}
      </body>
    </html>
  );
}
