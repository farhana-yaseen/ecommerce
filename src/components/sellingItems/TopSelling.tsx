import Courage from "./Courage"
import Faded from ".//Faded"
import LooseFit from "./LooseFit"
import Vertical from "./Vertical"
import ViewAll from "../ViewAll"


const TopSelling = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className="w-[231px] h-[38px] top-[1650px] ml-20 lg:w-[346px] lg:h-[58px] lg:top-[1728px] lg:ml-[546px]">
      <h1 className="font-fjalla font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">Top Selling</h1>
      </div>
         <div className="flex lg:justify-center items-center gap-10 lg:py-10 py-4">
          <Vertical/>
          <Courage/>
          <LooseFit/> 
          <Faded/>
         </div>
         
         <div>
         <ViewAll/>
         </div>
    </div>
  )
}

export default TopSelling
