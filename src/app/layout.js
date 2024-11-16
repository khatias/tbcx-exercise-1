import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";
import "../globals.css";

export const metadata = {
  title: "TBCx assignment",
  description: "A project assignment for TBCx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='flex flex-col justify-between h-full' >
        <UserProvider>
          <ThemeProvider defaultTheme="system"  enableSystem  attribute="class">
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}




