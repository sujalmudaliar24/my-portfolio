import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sujal Mudaliar — React Native Developer & Cybersecurity Enthusiast",
  description:
    "Portfolio of Sujal Mudaliar — a React Native mobile app developer and aspiring cybersecurity professional based in Mumbai. Showcasing mobile applications, technical expertise, and certifications.",
  keywords: [
    "Sujal Mudaliar",
    "React Native",
    "Mobile Developer",
    "Cybersecurity",
    "Portfolio",
    "TypeScript",
    "Expo",
    "Mumbai",
  ],
  openGraph: {
    title: "Sujal Mudaliar — React Native Developer & Cybersecurity Enthusiast",
    description:
      "Portfolio of Sujal Mudaliar showcasing mobile applications and technical expertise.",
    type: "website",
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
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </body>
    </html>
  );
}
