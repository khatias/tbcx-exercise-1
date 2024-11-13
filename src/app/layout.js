import { UserProvider } from "@auth0/nextjs-auth0/client";
import '../globals.css'
import { ThemeProvider } from "next-themes";



export const metadata = {
      title: 'TBCx assignment',
      description: 'A project assignment for TBCx'
  }
export default function RootLayout({ children }) {
    return (
      
   
      <html lang="en" suppressHydrationWarning={true} >
      
      <body  className='flex flex-col justify-between h-full'>
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