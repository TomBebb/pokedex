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
        <div className="top-2 flex px-4 py-2">PokeDex</div>
        {children}
      </body>
    </html>
  )
}
