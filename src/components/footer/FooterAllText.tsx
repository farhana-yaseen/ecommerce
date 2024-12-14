import Company from "./Company"
import FAQ from "./FAQ"
import Help from "./Help"
import Resources from "./Resources"
import TextWithLogos from "./TextWithLogos"



const FooterAllText = () => {
  return (
    <div className="lg:w-[1240px] lg:h-[177px] lg:top-[4011px] lg:left-[100px] m-auto bg ">
        <div className="flex flex-wrap lg:flex-nowrap justify-start lg:justify-between items-center lg:gap-[35px] gap-1">
        {/* Shop.com */}
        <div className="flex-grow">
            <TextWithLogos/>
        </div>
        
        {/* company */}
        <div className="w-1/2 lg:flex-1">
            <Company/>
        </div>
        {/* help */}
        <div className="w-1.2 lg:flex-1">
            <Help/>
        </div>
        {/* FAQ */}
        <div className="flex-1">
            <FAQ/>
        </div>
        {/* Resources */}
        <div className="flex-1">
            <Resources/>
        </div>
        </div>
    



</div>
  )
}

export default FooterAllText
