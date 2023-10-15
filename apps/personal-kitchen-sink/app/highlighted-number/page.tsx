import { ReactNode } from "react"

import {
  getStats,
  refreshCustomers,
  refreshOrders,
  refreshVisitors,
} from "@/lib/stats"
import Counter from "@/components/ui/counter"
import Highlight from "@/components/ui/highlight"

export default async function Home() {
  let { visitors, customers, orders } = await getStats()
  return (
    <div className="mx-auto flex w-full max-w-xs flex-1 items-center justify-center gap-2 space-y-6 sm:max-w-4xl">
      <div className="grid gap-10 sm:grid-cols-3 sm:gap-4">
        <div className="space-y-4">
          <Highlight trigger={visitors} duration={450} className="group">
            <div className="group-data-[highlight=on]:duration-[200ms] overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 px-3 py-5 text-sky-500 shadow transition duration-1000 group-data-[highlight=on]:bg-sky-500 group-data-[highlight=on]:text-white md:px-4">
              <dt className="truncate text-sm font-medium text-white/50">
                Visitors
              </dt>
              <dd className="relative mt-1 origin-center truncate text-lg font-semibold tabular-nums md:tracking-tight">
                <Counter value={visitors} />
              </dd>
            </div>
          </Highlight>

          <form action={refreshVisitors}>
            <Button>Refresh</Button>
          </form>
        </div>

        <div className="space-y-4">
          <Highlight trigger={customers} duration={500} className="group">
            <div className="group-data-[highlight=on]:duration-[150ms] overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 px-3 py-5 text-rose-500 shadow transition duration-1000 group-data-[highlight=on]:border-rose-500 md:px-4">
              <dt className="truncate text-sm font-medium text-white/50">
                Customers
              </dt>
              <dd className="relative mt-1 origin-center truncate text-lg font-semibold tabular-nums md:tracking-tight">
                <Counter value={customers} />
              </dd>
            </div>
          </Highlight>

          <form action={refreshCustomers}>
            <Button>Refresh</Button>
          </form>
        </div>

        <div className="space-y-4">
          <Highlight trigger={orders} duration={350} className="group">
            <div className="relative overflow-hidden rounded-lg bg-gray-900 px-3 py-5 text-green-500 shadow md:px-4">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg border border-white/[0.15]">
                <div className="aspect-square w-full rounded-full bg-green-500/50 opacity-0 group-data-[highlight=off]:animate-[fadeOut_750ms_forwards] group-data-[highlight=on]:animate-[ripple_250ms_cubic-bezier(0.09,.6,.36,1)_forwards]" />
              </div>

              <dt className="truncate text-sm font-medium text-white/50">
                Orders
              </dt>
              <dd className="duration-[750ms] group-data-[highlight=on]:duration-[250ms] relative mt-1 origin-center truncate text-lg font-semibold tabular-nums transition group-data-[highlight=on]:text-white md:tracking-tight">
                <Counter value={orders} />
              </dd>
            </div>
          </Highlight>

          <form action={refreshOrders}>
            <Button>Refresh</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

function Button({ children }: { children: ReactNode }) {
  return (
    <button className="block w-full rounded border-t border-white/5 bg-gray-700 px-4 py-1.5 text-sm font-semibold text-gray-200 shadow-sm transition hover:bg-gray-600/75 active:bg-gray-600">
      {children}
    </button>
  )
}

export const runtime = "edge"
