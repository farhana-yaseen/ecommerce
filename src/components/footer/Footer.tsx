import LatestOffer from "./LatestOffer"
import FooterAllText from "./FooterAllText"
import PaymentLogo from "./PaymentLogo"


const Footer = () => {
  return (
    
    <div className="md:w-full xl:w-[1441px] xl:h-[589px] xl:top-[3781px] flex flex-col justify-end">
      <div className="w-[392px] h-[846px] top-[3615px] ml-[1px] md:w-full md:h-[499px] xl:w-[1441px] xl:h-[499px] xl:top-[3871px] xl:left-[-1px] bg-searchColor flex flex-col justify-between">

        <div>
          <LatestOffer />
        </div>
        
        <div>
          {/* Rectangle */}
          <FooterAllText />

        </div>

        {/* line */}
        <div className="w-[358px] top-[1610px] left-6 md:w-[680px] lg:w-[940px] xl:w-[1240px] xl:top-[1664px] xl:left-[100px] border-[1px] border-opacity-10 mx-auto"></div>

        <div>
          {/* reserve */}
          <PaymentLogo />
        </div>

      </div>
    </div>
  )
}

export default Footer
