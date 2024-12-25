
import CheckShirt from "./CheckShirt"
import Sleeve from "./Sleeve"
import Tshirt from "./Tshirt"
import ViewAll from "../ViewAll"
import Jeans from "./Jeans"


const NewArrivals = () => {
  return (
    <div className="mt-52">
      <div className="w-[269px] h-[38px] top-[114px] ml-[61px] md:w-full xl:w-[403px] xl:h-[58px] xl:top-[991px] xl:ml-[518px] flex justify-center items-center">
         <h1 className="font-fjalla font-bold  text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">new arrivals</h1>
      </div>

         <div className="flex items-center gap-2 md:gap-10 justify-normal md:justify-center xl:gap-12 py-10">
          <Tshirt/>
          <Jeans/>
          <CheckShirt/>
          <Sleeve/>
         </div>
          
         <div className="py-10">
         <ViewAll/>
         </div>
         {/* line */}
         <div className="w-[358px] top-[1610px] ml-6 md:w-[700px] md:ml-12 lg:w-[900px] xl:w-[1240px] xl:top-[1664px] xl:ml-[100px] border-[1px] border-opacity-10 mx-auto"></div>
      
    </div>
  )
} 

export default NewArrivals
