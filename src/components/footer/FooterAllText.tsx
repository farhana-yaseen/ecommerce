import Company from "./Company"
import FAQ from "./FAQ"
import Help from "./Help"
import Resources from "./Resources"
import TextWithLogos from "./TextWithLogos"



const FooterAllText = () => {
  return (
    <div className="w-[1240px] h-[177px] top-[4011px] left-[100px] lg:flex lg:justify-between lg:items-center lg:gap-10 m-auto">
        {/* Shop.com */}
        <div className="lg:w-[248px] lg:h-[177px] lg:gap-[35px]">
            <TextWithLogos/>
        </div>
        <div className="lg:flex">
        {/* company */}
        <div className="lg:w-[248px] lg:h-[177px] lg:gap-[35px]">
            <Company/>
        </div>
        {/* help */}
        <div className="lg:w-[248px] lg:h-[177px] lg:gap-[35px]">
            <Help/>
        </div>
        {/* FAQ */}
        <div className="lg:w-[248px] lg:h-[177px] lg:gap-[35px]">
            <FAQ/>
        </div>
        {/* Resources */}
        <div className="lg:w-[248px] lg:h-[177px] lg:gap-[35px]">
            <Resources/>
        </div>
        </div>



</div>
  )
}

export default FooterAllText
