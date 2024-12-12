
import CheckShirt from "./CheckShirt"
import Sleeve from "./Sleeve"
import Tshirt from "./Tshirt"
import ViewAll from "../ViewAll"
import Jeans from "./Jeans"


const NewArrivals = () => {
  return (
    <div className="pt-48">
      <div className="w-[269px] h-[38px] top-[114px] ml-[61px] lg:w-[403px] lg:h-[58px] lg:top-[991px] lg:ml-[518px] flex">
         <h1 className="font-fjalla font-bold  text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">new arrivals</h1>
      </div>

         <div className="flex justify-between items-center gap-4 lg:justify-center lg:gap-10 py-10">
          <Tshirt/>
          <Jeans/>
          <CheckShirt/>
          <Sleeve/>
         </div>
          
         <div className="py-10">
         <ViewAll/>
         </div>
         {/* line */}
         <div className="w-[358px] top-[1610px] ml-6 lg:w-[1240px] lg:top-[1664px] lg:left-[100px] border-[1px] border-opacity-10 mx-auto"></div>
      
    </div>
  )
} 

export default NewArrivals
