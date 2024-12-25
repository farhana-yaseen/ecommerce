import Courage from "./Courage"
import Faded from ".//Faded"
import LooseFit from "./LooseFit"
import Vertical from "./Vertical"
import ViewAll from "../ViewAll"


const TopSelling = () => {
  return (
    <div className="mt-12 lg:mt-20">
      <div className="w-[231px] h-[38px] top-[1650px] ml-20 xl:w-[346px] md:w-full lg:w-full xl:h-[58px] xl:top-[1728px] xl:ml-[546px] flex justify-center items-center">
      <h1 className="font-fjalla font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">Top Selling</h1>
      </div>
         <div className="flex items-center gap-2 md:gap-6 justify-normal md:justify-center xl:gap-10 py-10">
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
