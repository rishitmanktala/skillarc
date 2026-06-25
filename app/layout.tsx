import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import PageTransition from "@/components/layout/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";

// Load Google Fonts using Next.js font optimizations
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "SkillARC — Achieving Real Change",
  description: "SkillARC is a youth-led Youth Foundation empowering adolescents and youth across India through critical life skills, digital literacy, and leadership training programs.",
  openGraph: {
    title: "SkillARC — Achieving Real Change",
    description: "SkillARC is a youth-led Youth Foundation empowering adolescents and youth across India through critical life skills, digital literacy, and leadership training programs.",
    type: "website",
    locale: "en_IN",
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
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bgPink text-charcoal">
        <Loader />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
