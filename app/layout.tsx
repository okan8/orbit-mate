import "./globals.css"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Siber Öncüler - Yenilikçi Eğitim Platformu",
  description: "Türk gençlerine yazılım öğretme ve siber güvenlik platformu",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} relative`}>
        <div className="animated-bg" />
        <div className="cyber-pattern fixed inset-0 z-[-1] opacity-20" />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'