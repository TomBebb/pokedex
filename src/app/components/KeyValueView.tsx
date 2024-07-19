export interface KeyValueViewProps {
  name: JSX.Element | string
  children: JSX.Element | string | number
}
export default function KeyValueView(props: KeyValueViewProps): JSX.Element {
  return (
    <div className="grid grid-cols-3 gap-2 lg:gap-0">
      <div className="px-2 col-span-3 lg:col-span-1 font-bold outline outline-1 text-center lg:text-right">
        {props.name}
      </div>
      <div className="px-2 col-span-3 lg:col-span-2 outline outline-1 text-center lg:text-left ">
        {props.children}
      </div>
    </div>
  )
}
