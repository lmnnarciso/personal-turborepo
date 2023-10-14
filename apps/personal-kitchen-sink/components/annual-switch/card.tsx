import React, { FC, ReactNode } from "react"
import clsx from "clsx"

interface Props {
  children: ReactNode
  className?: string
}

const Card: FC<Props> = (props) => {
  const { children, className } = props
  const containerClassnames = clsx(
    "h-fit rounded-lg bg-white p-4 shadow-card",
    className
  )
  return <div className={containerClassnames}>{children}</div>
}

export { Card }
