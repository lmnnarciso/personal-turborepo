import { cn } from "@/lib/utils"

export default function InventoryUI() {
  const items = Array.from({ length: 25 }, (_, i) => i)
  console.log({ items })
  return (
    <div className="mx-auto max-w-[260px]">
      <h1 className="text-center">Inventory UI</h1>
      <div className=" grid grid-cols-5 justify-items-center gap-1">
        {items.map((item) => (
          <div
            className={cn(
              "h-[50px] w-[50px] cursor-pointer rounded-sm border",
              "hover:border-blue-400"
            )}
          ></div>
        ))}
      </div>
    </div>
  )
}
