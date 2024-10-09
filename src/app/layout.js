import { Inter, Roboto_Mono } from 'next/font/google'
 
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
          <div id="root">{children}
          </div>
        </body>
      </html>
    )
  }