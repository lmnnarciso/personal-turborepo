import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const Marquee = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        " flex w-full select-none gap-[var(--marquee-gap)] overflow-hidden  px-48",
        className
      )}
    >
      <ul className="flex min-w-full shrink-0 animate-scroll-marquee justify-around gap-[var(--marquee-gap)]  ">
        {children}
      </ul>
      {/* <!-- Mirrors the content above --> */}
      <ul
        className="flex min-w-full shrink-0 animate-scroll-marquee justify-around gap-[var(--marquee-gap)]"
        aria-hidden="true"
      >
        {children}
      </ul>
    </div>
  )
}
