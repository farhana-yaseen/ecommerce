import Bermuda from "./Bermuda"
import BlackShirt from "./BlackShirt"
import Casual from "./Casual"
import Count from "./Count"
import CourageShirt from "./CourageShirt"
import GradiantGraphicTShirt from "./GradiantGraphicTShirt"
import JeansFit from "./JeansFit"
import PoloTShirt from "./PoloTShirt"
import RedCheckShirt from "./RedCheckShirt"
import SleeveStript from "./SleeveStript"
import VerticalShirt from "./VerticalShirt"


const ProductWithPrice = () => {
  return (
    <div className="w-[390px] h-full md:w-[650px] lg:w-[750px] xl:w-[925px] md:mx-[60px] lg:mx-0">

      <div>
      <Casual/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 md:gap-10 lg:gap-x-1 gap-y-12">
        <GradiantGraphicTShirt />
        <PoloTShirt />
        <BlackShirt />
        <JeansFit />
        <RedCheckShirt />
        <SleeveStript />
        <VerticalShirt/>
        <CourageShirt/>
        <Bermuda/>
      </div>

       {/* line */}
       <div className="w-[358px] top-[1053px] left-4 md:w-[650px] xl:w-[925px] xl:top-[1591px] xl:left[415px] border-[1px] border-black opacity-10 mt-10"></div>
<div className="my-5 lg:my-10">
      <Count/>
</div>

    </div>
  )
}

export default ProductWithPrice
