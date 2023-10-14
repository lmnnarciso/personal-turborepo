"use client"

import { Card } from "./card"

const AnnualPlanSwitchModal = () => {
  return (
    <Card className="mx-auto flex w-[412px] max-w-2xl flex-col items-center gap-y-6 rounded-lg border !p-0 text-card-foreground md:w-full">
      <div className="flex w-full items-center justify-end p-4">
        <button
          onClick={() => {}}
          className="cursor-pointer bg-transparent p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold leading-[45px]">
          Save as much as{" "}
          <span className="text-5xl font-extrabold leading-[72px]">50%</span>{" "}
          off
        </h1>
        <h1 className="text-center text-3xl font-bold leading-[45px]">
          by switching to an annual plan!
        </h1>
      </div>
    </Card>
  )
}
export default AnnualPlanSwitchModal
