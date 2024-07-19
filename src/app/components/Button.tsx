import React from "react"

import "@/app/globals.css"
import { StyleColor } from "@/common/colors"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { Url } from "node:url"

export const enum Align {
  Left = "left",
  Right = "right",
  Center = "center",
}
export interface ButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  disabled?: boolean
  icon?: string
  align?: Align
  style?: StyleColor
}
export default function Button({ children, ...props }: ButtonProps) {
  const align = props.align ?? Align.Left
  const El = props.href && !props.disabled ? Link : "button"
  const style = props.style ?? StyleColor.Primary
  const icon = props.icon ? (
    <Icon
      className={align === Align.Right ? "col-start-11" : ""}
      icon={props.icon}
    />
  ) : (
    <></>
  )
  return (
    <El
      href={(props.disabled ? undefined : (props.href ?? "")) as unknown as Url}
      disabled={props.disabled}
      className={`outline-1 outline ${props.disabled ? "bg-gray-300" : `bg-${style} text-${style}-content hover:bg-blue-600`} outline-blue-950 gap-2 px-2 py-0.5 transition-colors rounded flex flex-row items-center  ${props.className}`}
    >
      {align !== Align.Right ? icon : <></>}
      <div className={`text-${align} flex-1`}>{children}</div>
      {align === Align.Right ? icon : <></>}
    </El>
  )
}
