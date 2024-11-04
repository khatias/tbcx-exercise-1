import { Inter, Roboto_Mono } from 'next/font/google';
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// import Providers from './providers';
import '../globals.css'
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from './ThemeSwitcher';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

import '../App.css'
export const metadata = {
      title: 'TBCx assignment',
      description: 'A project assignment for TBCx'
  }
export default function RootLayout({ children }) {
    return (
   
      <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      
      <body>
        <UserProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
        {children}
        </ThemeProvider>
        </UserProvider>
          </body>
        
      </html>
   
    )
  }