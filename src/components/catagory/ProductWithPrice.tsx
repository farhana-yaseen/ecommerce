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
    <div className="w-[390px] h-[2140px] left-[5620px] lg:w-[925px]">

      <Casual/>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-12">
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
      <Count/>

    </div>
  )
}

export default ProductWithPrice
