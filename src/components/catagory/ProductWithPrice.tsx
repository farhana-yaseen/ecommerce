import BlackShirt from "./BlackShirt"
import GradiantGraphicTShirt from "./GradiantGraphicTShirt"
import JeansFit from "./JeansFit"
import PoloTShirt from "./PoloTShirt"
import RedCheckShirt from "./RedCheckShirt"
import SleeveStript from "./SleeveStript"


const ProductWithPrice = () => {
  return (
    <div className="w-[390px] h-[2140px] left-[5620px] lg:w-[925px]">

        

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
            <GradiantGraphicTShirt/>
            <PoloTShirt/>
            <BlackShirt/>
            <JeansFit/>
            <RedCheckShirt/>
            <SleeveStript/>
        </div>
      
    </div>
  )
}

export default ProductWithPrice
