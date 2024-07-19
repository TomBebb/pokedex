"use client"
import Button, { Align } from "@/app/components/Button"
import { routes } from "@/common/routes"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between p-10 gap-20">
      {routes
        .filter((r) => !r.hidden && typeof r.path === "string")
        .map((item) => (
          <Button
            key={item.name}
            href={item.path as string}
            className="w-full h-full "
            align={Align.Center}
            icon={item.icon?.inactive}
          >
            <div className="flex flex-col  items-center ">
              <div className="font-bold">{item.name}</div>
              <div>{item.description}</div>
            </div>
          </Button>
        ))}
    </main>
  )
}
