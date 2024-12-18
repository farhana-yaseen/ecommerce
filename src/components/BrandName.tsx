import Image from "next/image"

const BrandName = () => {
  return (
    <div className='w-[390px] h-[146px] top-[951px] lg:w-[1440px] lg:h-[122px] lg:top-[797px] bg-black flex flex-wrap justify-around items-center'>

        {/* Versace Logo */}
        <div className='lg:w-[166.48px] lg:h-[33.16px] lg:top-[841px] lg:left-[100px]'>
        <Image src={"/brandLogo/versace.png"} alt="versace" width={166.45} height={33.16} className="w-[116.74px] h-[23.25px] lg:w-[166.45px] lg:h-[33.16px] top-[991px] ml-4 lg:top-[841px] object-contain"></Image>
        </div>

         {/* zara Logo */}
         <div className='top-[990px] left-[166.74px] lg:w-[91px] lg:h-[38px] lg:top-[839px] lg:left-[372.48px]'>
        <Image src={"/brandLogo/zara.png"} alt="zara" width={91} height={37.98} className="w-[63.81px] h-[26.63px] top-[0.01px] lg:w-[91px] lg:h-[37.98px] object-contain"></Image>
        </div>

        {/* gucci Logo */}
        <div className='w-[109.39px] h-[25.24px] top-[990.7px] left-[264.55px] lg:w-[156px] lg:h-9 lg:top-[840px] lg:left-[569.48px]'>
        <Image src={"/brandLogo/gucci.png"} alt="gucci" width={156} height={32.29} className="w-[109.39px] h-[22.64px] top-[1.3px] lg:w-[156px] lg:h-[32.29px] lg:top-[1.86px] object-contain"></Image>
        </div>

        {/* prada Logo */}
        <div className='w-[127px] h-[21px] top-[1037px] left-48 lg:w-[194px] lg:h-8 lg:top-[842px] lg:left-[834.48px]'>
        <Image src={"/brandLogo/prada.png"} alt="prada" width={194} height={31.2} className="w-[127px] h-[20.47px] top-[0.26px] border-[0.02px] lg:w-[194px] lg:h-[31.2px] lg:top-[1.86px] object-contain "></Image>
        </div>

        {/* calvin Logo */}
        <div>
        <Image src={"/brandLogo/calvin.png"} alt="calvin" width={206.79} height={33.35} className="w-[134.84px] h-[21.75px] top-[1036.82px] left-[206.16px] lg:w-[206.79px] lg:h-[33.35px] lg:top-[1.86px] object-contain "></Image>
        </div>

    </div>
   
   
   
  )
}

export default BrandName
