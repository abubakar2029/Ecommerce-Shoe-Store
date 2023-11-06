import "./NavigationCard.css"

function NavigationCard() {
  let brandNames = ["Addidas", "Service", "Service", "Nike", "Bata"]
  return (
    <div className="flex flex-col w-64 h-420 text-left float-right mr-3 gap-y-3 p-5 abc  ">{/* Parent div starts relative*/}
      <h1 className="font-semibold text-xl">Brands</h1>
      <div className="text-xl  top-7 left-24 text-zinc-500">{/* */}
        {brandNames.map((name) => {
          return <p className="cursor-pointer" >{name}</p>
        })
        }
      </div>
    </div>
  )
}
export { NavigationCard }