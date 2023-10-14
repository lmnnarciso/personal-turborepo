"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

export const persons = [
  {
    img: "https://unsplash.com/photos/oifclaPX5oM/download?force=true&w=590&h=640",
    title:
      "chief financial officer and executive vice president for global finance, aon plc",
    name: "Christa Davies",
  },
  {
    img: "https://unsplash.com/photos/oifclaPX5oM/download?force=true&w=590&h=640",
    title: "revenue and financial management, stripe",
    name: "Vivek Sharma",
  },
  {
    img: "https://unsplash.com/photos/fghYlu1ec2U/download?force=true&w=590&h=640",
    title: "head of product marketing, stripe",
    name: "Tanya Khakbaz",
  },
  {
    img: "https://unsplash.com/photos/a5XdeIb9Zso/download?force=true&w=590&h=640",
    title: "head of global sales, stripe",
    name: "Eileen O'Mara",
  },
  {
    img: "https://unsplash.com/photos/RDUyi9YXPxk/download?force=true&w=590&h=640",
    title: "founder, pulley",
    name: "Yin Wu",
  },
  {
    img: "https://unsplash.com/photos/TMZuhaL2kHo/download?force=true&w=590&h=640",
    title: "ceo and cofounder, crowdai",
    name: "Devaki Raj",
  },
  {
    img: "https://unsplash.com/photos/XO25cX2_0iE/download?force=true&w=590&h=640",
    title: "co-head of payments, wix",
    name: "Amit Sagiv",
  },
  {
    img: "https://unsplash.com/photos/DLKR_x3T_7s/download?force=true&w=590&h=640",
    title: "general partner, andreessen horowitz",
    name: "Angela Strange",
  },
]

export default function Hero() {
  const [selected, setSelected] = useState(0)
  return (
    <div className="flex h-full w-full items-center justify-center ">
      <ul className="flex max-w-[1200px] justify-start gap-8">
        {/* https://unsplash.com/photos/DLKR_x3T_7s/download?force=true&w=590&h=640 */}

        {persons.map((person, index) => (
          <li
            className={cn(
              "relative h-[640px] transition-[width] duration-700",
              selected === index ? "w-[48%]" : " w-[8%] hover:w-[12.5%]"
            )}
            onClick={() => {
              setSelected(index)
            }}
            key={person.name}
            // transition={{
            //   ease: "easeIn",
            //   duration: 0.2,
            // }}
          >
            <div className="relative h-full overflow-hidden rounded-2xl">
              <img
                width={545}
                height={640}
                src={person.img}
                className="h-full object-cover  grayscale "
              />
              <div
                className={cn(
                  "absolute inset-0 h-[500px] w-[500px] opacity-25 duration-300",
                  selected === index
                    ? " before:bg-texture before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 md:absolute md:transition-opacity"
                    : "",
                  selected === index
                    ? "after:bg-texture after:absolute after:bottom-[-280px] after:left-0 after:right-[-434px] after:top-0 after:z-10"
                    : ""
                )}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
