import '../app.css'
export const metadata = {
      title: 'TBCx assignment',
      description: 'A project assignment for TBCx'
  }
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div id="root">{children}
          </div>
        </body>
      </html>
    )
  }