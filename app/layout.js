'use client'

import './globals.css'
import GNB from './components/gnb'
import Footer from './components/footer'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Lash Js',
}

export default function RootLayout({ children }) {
    if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
    }
  return (
    <html lang="en">
        <body className="bg-primary">
          <ThemeProvider attribute='class'>
            <GNB />
              {children}
            <Footer />
          </ThemeProvider>
        </body>
    </html>
  )
}