import { Button } from "@bookipi/bds"

import { GiftCard } from "./GiftCard"
import { ReferralProgram } from "./ReferalProgram"

const AgentClient = (props) => {
  return (
    <div className="font-inter flex w-full flex-col gap-3 px-5">
      <div className="flex w-full items-center justify-between pb-6 pt-7">
        <div className=" font-inter text-2xl font-bold leading-9 text-black">
          Payroller
        </div>
        <div className="flex gap-4">
          <Button
            outline
            color="alternative"
            leftIcon={"SolidAddDocument"}
            showLeftIcon
            onClick={props.state.onRouteToImportClient}
          >
            Import
          </Button>
          <Button
            onClick={props.state.openInvitationModal}
            leftIcon={"Plus"}
            showLeftIcon
          >
            Add Client
          </Button>
        </div>
      </div>
      {/* <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold my-auto font-inter leading-[30px] text-black">Agent referral program</h2>
          <svg
            className="w-6 h-6 text-gray-400  "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
          </svg>
        </div>
        <div className="flex bg-[#E5E7EB] border border-gray-400 w-full rounded-xl px-6 py-8 gap-14">
          <GiftCard />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-inter font-bold leading-[30px] text-black">
                Get $50 for every client you refer who subscribes to an annual plan*
              </h1>
              <p className="text-base font-inter">
                It’s super simple to refer your clients to Payroller. Join today and start growing your practice.
              </p>
            </div>
            <div className="max-w-[150px]">
              <button className="h-[52px] w-[145px] flex gap-2 items-center justify-center rounded-lg border !border-newPrimary700 bg-transparent font-inter cursor-pointer font-bold text-newPrimary700 hover:text-white hover:!bg-newPrimary700 ">
                Join now
              </button>
            </div>

            <a href="#" className="text-sm font-medium text-newPrimary700 font-inter">
              Terms & conditions
            </a>
          </div>
        </div>
      </section> */}
      <ReferralProgram />
      {/* <div className="my-[72px]  border-b border-gray-400" /> */}
    </div>
  )
}
export default AgentClient
