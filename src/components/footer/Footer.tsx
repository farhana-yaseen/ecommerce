import LatestOffer from "../LatestOffer"
import FooterAllText from "./FooterAllText"
import PaymentLogo from "./PaymentLogo"


const Footer = () => {
  return (
    <div className="w-[392px] h-[846px] top-[3615px] left-[-1px] lg:w-[1441px] lg:h-[589px] lg:top-[3781px]">
        <div className="lg:w-[1441px] lg:h-[499px] lg:top-[3871px] lg:left-[-1px] bg-searchColor flex flex-col justify-between">
       
        <div>
        <LatestOffer/>
        </div>

            {/* Rectangle */}

            <FooterAllText/>
    
        <div>
            {/* reserve */}
            <PaymentLogo/>
        </div>
      
        </div>
    </div>
  )
}

export default Footer
