import Image from "next/image"

import { Marquee } from "@/components/ui/marquee"

export function BrandMarquee() {
  return (
    <Marquee className=" bg-black p-12">
      <li className="flex items-center">
        <Image
          src="/versace.svg"
          height={36}
          width={156}
          //   layout="fill"
          objectFit="contain"
          alt="brand versace"
        />
      </li>
      <li className="flex max-h-[36px] items-center">
        <Image
          src="/zara.svg"
          className="block"
          height={36}
          width={156}
          //   layout="fill"
          objectFit="contain"
          alt="brand versace"
        />
      </li>
      <li className="flex items-center">
        <Image
          src="/gucci.svg"
          height={36}
          width={156}
          //   layout="fill"
          objectFit="contain"
          alt="brand versace"
        />
      </li>
      <li className="flex items-center">
        <Image
          src="/prada.svg"
          height={36}
          width={156}
          //   layout="fill"
          objectFit="contain"
          alt="brand versace"
        />
      </li>
      <li className="flex items-center">
        <Image
          className="block"
          src="/ck.svg"
          height={36}
          width={156}
          //   layout="fill"
          objectFit="contain"
          alt="brand versace"
        />
      </li>
    </Marquee>
  )
}
