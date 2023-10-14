import { LayoutProps } from "@/.next/types/app/layout"

export default function Layout(props: LayoutProps) {
  return (
    <div className="mx-auto w-full">
      <h1 className="text-center">Anime Dashboard</h1>
      {props.children}
    </div>
  )
}
