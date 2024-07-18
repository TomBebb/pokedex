import Header from "@/app/components/Header"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TomDex",
  description: "A Nextjs Pokedex client",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="px-4 py-2 scroll-auto">{children}</div>
      </body>
    </html>
  )
}
