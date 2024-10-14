"use client";
import { Poppins, Lato, Mulish } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased`}>{children}</body>
    </html>
  );
}
