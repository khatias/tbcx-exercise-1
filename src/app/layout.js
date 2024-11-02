import { Inter, Roboto_Mono } from 'next/font/google';
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

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
        <UserProvider>
        <body>
          <Header/>
        {children}
          <Footer/>
          </body>
        </UserProvider>
      </html>
   
    )
  }