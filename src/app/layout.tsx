import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Black Comet | Miniaturas de resina de alta calidad",
  description:
    "Tienda online especializada en figuritas de resina de alta calidad. Descubre nuestra colección única de héroes, dragones, caballeros y más. Ideal para aficionados a D&D y Warhammer. Envíos a todo el mundo. Compra ahora y lleva la magia de las figuras 3D a tu hogar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
