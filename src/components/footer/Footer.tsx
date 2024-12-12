import LatestOffer from "../LatestOffer"
import FooterAllText from "./FooterAllText"
import PaymentLogo from "./PaymentLogo"


const Footer = () => {
  return (
    <div className="lg:w-[1441px] lg:h-[589px] lg:top-[3781px] pt-10">
      <div className="w-[392px] h-[846px] top-[3615px] left-[-1px] lg:w-[1441px] lg:h-[499px] lg:top-[3871px] lg:left-[-1px] bg-searchColor flex flex-col justify-between">

        <div>
          <LatestOffer />
        </div>
        
        <div>
          {/* Rectangle */}
          <FooterAllText />

        </div>

        {/* line */}
        <div className="w-[358px] top-[1610px] left-6 lg:w-[1240px] lg:top-[1664px] lg:left-[100px] border-[1px] border-opacity-10 mx-auto"></div>

        <div>
          {/* reserve */}
          <PaymentLogo />
        </div>

      </div>
    </div>
  )
}

export default Footer
