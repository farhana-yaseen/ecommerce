import Image from "next/image"

const TextWithLogos = () => {
  return (
    <div>
        {/* Text */}
        <div className="lg:w-[248px] lg:h-[114px] lg:gap-[25px] flex flex-col">
            <h1 className="w-[144px] h-5 top-[3804.58px] left-4 lg:w-[167px] lg:h-[23px] font-fjalla font-bold text-[28.85px] lg:text-[33.45px] leading-[34.62px] lg:leading-[40.15px]">SHOP.CO</h1>
            <h1 className="w-[357px] h-10 top-[3838.58px] left-[17px] lg:w-[248px] lg:h-[66px] font-figtree font-normal text-sm leading-[22px] opacity-60">We have clothes that suits your style and which you’re proud to wear. From women to men.</h1>
        </div>

        {/* Logos */}
        <div className="w-[148px] h-7 top-[3898.58px] left-4">
            {/* Social */}
            <div className="w-7 h-7 top-[3898.58px] left-4 lg:top-[149px] border-[1px] border-opacity-20 rounded-full bg-white">
                {/* Twitter */}
                <Image src={"/media/twitter.png"} alt="Correction Sign" width={11.17} height={9.03} className="w-[11.17px] h-[9.03px] top-[3908.52px] left-[25.03px] lg:top-[158.94px] lg:ml-[9.03px] object-contain "></Image>
            </div>

            <div className="w-7 h-7 top-[3898.58px] left-[56px] lg:top-[149px] border-[1px] border-opacity-20 rounded-full bg-white">
                {/* Facebook */}
                <Image src={"/media/twitter.png"} alt="Correction Sign" width={11.17} height={9.03} className="w-[11.17px] h-[9.03px] top-[3908.52px] left-[25.03px] lg:top-[158.94px] lg:ml-[9.03px] object-contain "></Image>
            </div>

            <div className="w-7 h-7 top-[3898.58px] left-[56px] lg:top-[149px] border-[1px] border-opacity-20 rounded-full bg-white">
                {/* Instagram */}
                <Image src={"/media/twitter.png"} alt="Correction Sign" width={11.17} height={9.03} className="w-[11.17px] h-[9.03px] top-[3908.52px] left-[25.03px] lg:top-[158.94px] lg:ml-[9.03px] object-contain "></Image>
            </div>

            <div className="w-7 h-7 top-[3898.58px] left-[56px] lg:top-[149px] border-[1px] border-opacity-20 rounded-full bg-white">
                {/* github */}
                <Image src={"/media/twitter.png"} alt="Correction Sign" width={11.17} height={9.03} className="w-[11.17px] h-[9.03px] top-[3908.52px] left-[25.03px] lg:top-[158.94px] lg:ml-[9.03px] object-contain "></Image>
            </div>
        </div>
     
    </div>
  )
}

export default TextWithLogos
