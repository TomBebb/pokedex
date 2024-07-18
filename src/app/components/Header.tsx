"use client"
import { routes } from "@/common/meta"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="top-0 flex items-center outline border-b-2 border-b-orange-50 px-4 py-2 sticky bg-black gap-5">
      <Link href="/" className="text-2xl">
        PokeDex
      </Link>
      <div className="flex-1"></div>
      {routes.map((route) => (
        <Link
          key={route.path}
          href={route.path}
          className={`${pathname === route.path ? "border-b-green-400" : ""} border-b-2 transition-colors hover:border-b-green-400`}
        >
          {route.name}
        </Link>
      ))}
    </header>
  )
}
