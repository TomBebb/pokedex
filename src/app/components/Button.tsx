import React from "react"

import "@/app/globals.css"
import Link from "next/link"
import { Url } from "node:url"
export interface ButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  disabled?: boolean
}
export default function Button({ children, ...props }: ButtonProps) {
  const El = props.href && !props.disabled ? Link : "button"
  return (
    <El
      href={(props.disabled ? undefined : (props.href ?? "")) as unknown as Url}
      disabled={props.disabled}
      className={`outline-1 outline ${props.disabled ? "bg-gray-300" : "bg-blue-300 hover:bg-blue-600"} outline-blue-950 text-gray-950 px-2 py-0.5 transition-colors rounded ${props.className}`}
    >
      {children}
    </El>
  )
}
