import { test, expect } from "vitest"
import { navCategories, navItems, navItemsByCat } from "./nav"
console.debug({ navCategories, navItemsByCat })
test("navItemsByCat matches items", () => {
  for (const cat of navCategories) {
    const navItemByCat = navItemsByCat[cat]
    const checkAgainstt = navItems.filter((ni) => ni.category === cat)

    expect(navItemByCat).toStrictEqual(
      checkAgainstt.length === 0 ? undefined : checkAgainstt
    )
  }
})
