import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusVerse AI | Virtual Campus",
  description:
    "A first look at CampusVerse AI, a shared virtual campus experience for learning and collaboration.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="campusverse-theme-init" strategy="beforeInteractive">
          {`try {
  var savedTheme = localStorage.getItem("campusverse-theme");
  var systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme =
    savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : systemPrefersDark
        ? "dark"
        : "light";
} catch (error) {
  console.warn("Could not read the saved CampusVerse theme; using the system preference.", error);
  document.documentElement.dataset.theme =
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}`}
        </Script>
      </body>
    </html>
  );
}
