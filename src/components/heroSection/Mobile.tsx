import Image from "next/image"
import BrandName from "./BrandName"
import QualityProduct from "./QualityProduct"

const Mobile = () => {
  return (
    <div>

    
    <div className="w-[390px] h-[853px] bg-rectangleColor relative">

      <div className="flex flex-col justify-center space-y-8">
        <div className="w-[315px] h-[93px] top-[138px] ml-4 mt-10 ">
          <h1 className="font-Integral font-bold text-4xl leading-[34px] ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        </div>

        <div className="w-[358px] h-[50px] top-[251px] ml-4  ">
          <h1 className="font-figtree font-normal text-sm lg:text-base opacity-60">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h1>
        </div>

        {/* Button */}
        <div className="w-[358px] h-[52px] top-[325px] ml-4 px-[54px] py-4 rounded-[62px] bg-black flex justify-center items-center">
          <h1 className="w-[75px] h-[22px] font-figtree font-medium text-base leading-[21.6px] text-white">Shop Now</h1>
        </div>
      </div>

        <div>
          <QualityProduct />
        </div>
        <div>
      <Image src={"/bigstar.png"} alt="bigstar" width={76} height={76} className="w-[76px] h-[76px] top-[543px] ml-[293px] object-contain absolute"></Image>
    </div>

    <div>
      <Image src={"/smallstar.png"} alt="star" width={44} height={44} className="w-[44px] h-[44px] top-[640px] ml-[27px] object-contain absolute"></Image>
    </div>

        <div className="w-[390px] h-[448px] top-[503px] bg-green mt-20 ">
          <Image src={"/mobile.png"} alt="boygirl" width={390} height={448} className="w-[390px] h-[448px] top-[503px] object-contain"></Image>
        </div>
    </div>

    <div className="absolute">
      <BrandName />
    </div>

  </div>
  )
}

export default Mobile
