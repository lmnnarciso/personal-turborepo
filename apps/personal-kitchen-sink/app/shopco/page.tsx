"use client"

import Image from "next/image"
import { LucideUser, Search, ShoppingCart, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"

import { BrandMarquee } from "./components/BrandMarquee"

const NAV = ["Shop", "On Sale", "New Arrivals", "Brands"]

export default function ShopCo() {
  return (
    <div className="">
      <div className="relative mx-auto flex justify-center bg-black py-2  text-white">
        <p className="">
          Sign up and get 20% off to your first order. Sign Up Now
        </p>
        <button className="absolute right-24">
          <X />
        </button>
      </div>

      <div className="flex items-center justify-center gap-10 p-6">
        <a>
          <Image
            src="/shopco-logo.png"
            width={150}
            height={100}
            alt="shop logo"
          />
        </a>
        <ul className="flex gap-4">
          {NAV.map((nav) => (
            <li key={nav}>{nav}</li>
          ))}
        </ul>
        <div className="flex h-full min-h-[48px] basis-2/5 items-center rounded-full bg-gray-300 px-4 outline-1 outline-offset-1 focus-within:outline-1">
          <Search className="mx-2" />
          <input
            className="h-full w-full   bg-gray-300 outline-0"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex gap-8">
          <button>
            <ShoppingCart />
          </button>
          <button>
            <LucideUser />
          </button>
        </div>
      </div>

      <div className="bg-[#f2f0f1]">
        <div className="h-[600px] w-full bg-shop-co-hero bg-contain bg-right-top bg-no-repeat">
          <div className="flex flex-col gap-8 p-24">
            <h1 className="text-7xl font-bold">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>
            <p className="max-w-xl break-words">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Button className="max-w-[200px] rounded-full px-16 py-4" size="lg">
              Shop Now
            </Button>
            <div className=" flex gap-4">
              <div className=" border-1 flex flex-col border-r-[1px] border-r-gray-300 pr-6">
                <h1 className="text-5xl font-bold">200+</h1>
                <p className="font-extralight">International Brands</p>
              </div>
              <div className=" border-1 flex flex-col border-r-[1px] border-r-gray-300 pr-6">
                <h1 className="text-5xl font-bold">2,000+</h1>
                <p className="font-extralight">High Quality Products</p>
              </div>
              <div className=" border-1 flex flex-col  border-r-gray-300 pr-6">
                <h1 className="text-5xl font-bold">30,000+</h1>
                <p className="font-extralight">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <BrandMarquee />

        <div>
          <div className="rounded-xl">
            <Image
              src="/black-shirt.png"
              alt="T shirt with Tape Details"
              layout=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
