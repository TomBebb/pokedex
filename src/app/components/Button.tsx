import React from "react"

import "@/app/globals.css"
import Link from "next/link"
export interface ButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
}
export default function Button({ children, ...props }: ButtonProps) {
  const El = props.href ? Link : "button"
  return (
    <El
      href={props.href ?? ""}
      className={`outline-1 outline outline-blue-950 text-gray-950 px-2 py-0.5 bg-blue-300 hover:bg-blue-600 transition-colors rounded ${props.className}`}
    >
      {children}
    </El>
  )
}
