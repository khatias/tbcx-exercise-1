import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import React from "react";

export const metadata = {
  title: "TBCx assignment",
  description: "A project assignment for TBCx",
};

interface RootLayoutProps{
  children : React.ReactNode
}

export default function RootLayout({ children} : RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='flex flex-col justify-between h-full' >
 
          <ThemeProvider defaultTheme="system"  enableSystem  attribute="class">
            {children}
          </ThemeProvider>
   
      </body>
    </html>
  );
}




