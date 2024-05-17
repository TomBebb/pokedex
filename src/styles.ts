export type MainStyle = "primary" | "secondary"
export type MyStyle = "error" | MainStyle
export const mainStyles: MainStyle[] = ["primary", "secondary"]
export function styleClass(style: MyStyle, prefix: string = "") {
  return `${prefix}bg-${style} ${prefix}text-${style}-content`
}
