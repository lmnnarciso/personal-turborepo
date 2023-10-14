import { Button } from "@bookipi/bds"

export function ReferralProgram() {
  return (
    <section className="space-between flex items-center">
      <div className="mr-auto">
        <h2 className="font-inter my-auto text-xl font-bold leading-[30px] text-black">
          Referral program
        </h2>
      </div>
      <div>
        <Button
          outline
          color="alternative"
          leftIcon={"Pencil"}
          showLeftIcon
          // onClick={props.state.onRouteToImportClient}
        >
          Import
        </Button>
      </div>
    </section>
  )
}
