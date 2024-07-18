import { routes } from "@/common/meta"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
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
        <header className="top-0 flex  outline border-b-2 border-b-orange-50 px-4 py-2 sticky bg-black gap-5">
          <Link href="/" className="text-2xl">
            PokeDex
          </Link>
          <div className="flex-1"></div>
          {routes.map((route) => (
            <Link href={route.path}>{route.name}</Link>
          ))}
        </header>
        <div className="px-4 py-2 scroll-auto">{children}</div>
      </body>
    </html>
  )
}
