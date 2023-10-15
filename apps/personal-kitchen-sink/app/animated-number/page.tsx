"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"

function AnimatedNumber({ value }: { value: number }) {
  let spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 })
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span>{display}</motion.span>
}

export default function Page() {
  let [value, setValue] = useState(1000)

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Button onClick={() => setValue(value - 100)}>-100</Button>

      <AnimatedNumber value={value} />

      <Button onClick={() => setValue(value + 100)}>+100</Button>
    </div>
  )
}
