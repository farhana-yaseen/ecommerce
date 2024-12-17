
import ApplyFilter from "./ApplyFilter"
import Colors from "./Colors"
import DressStyleList from "./DressStyleList"
import FilterItems from "./FilterItems"
import PriceColor from "./PriceColor"
import Size from "./Size"


const Filters = () => {
  return (
    <div className="w-[390px] h-[1066px] top-[93px] rounded-[20px] bg-white lg:w-[295px] lg:h-[1220px] lg:top-[204px] border-[1px] px-6 py-5 border-opacity-10">
      
      <div className="flex flex-col gap-5">
      <FilterItems/>
      <PriceColor/>
      <Colors/>
      <Size/>
      <DressStyleList/>
      <ApplyFilter/>
      </div>
      
    </div>
  )
}

export default Filters
