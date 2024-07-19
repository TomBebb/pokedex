"use client"
import { findMatchingRoute, routes } from "@/common/routes"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const activeRoute = findMatchingRoute(pathname ?? "/")
  return (
    <header className="top-0 flex items-center outline border-b-2 border-b-orange-50 px-4 py-2 sticky bg-black gap-5">
      <Link href="/" className="text-2xl">
        PokeDex
      </Link>
      {activeRoute && <>{activeRoute.name}</>}

      <div className="flex-1"></div>
      {routes
        .filter((route) => !route.hidden)
        .map((route) => (
          <Link
            key={route.path as string}
            href={route.path as string}
            className={`${pathname === route.path ? "border-b-green-400" : ""} flex flex-row items-center gap-2 border-b-2 transition-colors hover:border-b-green-400`}
          >
            {route.icon && (
              <Icon
                icon={
                  pathname === route.path
                    ? route.icon.active
                    : route.icon.inactive
                }
              />
            )}
            {route.name}
          </Link>
        ))}
    </header>
  )
}
