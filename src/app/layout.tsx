import { ThemeProvider } from "next-themes";
import "../globals.css";
import React from "react";

export const metadata = {
  title: "TBCx assignment",
  description: "A project assignment for TBCx",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className=" h-full">
        <div className="flex flex-col min-h-full">
          <ThemeProvider defaultTheme="system" enableSystem attribute="class">
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
