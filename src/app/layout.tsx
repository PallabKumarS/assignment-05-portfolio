import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/provider/ThemeProvider";

export const metadata: Metadata = {
  title: "PKS Portfolio",
  description: "Portfolio of Pallab Kumar Sarker (PKS)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
