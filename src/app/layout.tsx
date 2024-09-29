import type { Metadata } from "next";
import { Roboto } from "next/font/google";

<<<<<<< HEAD
import "react-big-calendar/lib/css/react-big-calendar.css";
=======
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Demo aplicación administrativa",
=======
  title: "Demo Alquiler maquinaria",
>>>>>>> 96a3ad873103083cc5428418cfca434788998b4b
  description: "Proyecto demostrativo de funcionalidades para aplicación movil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
