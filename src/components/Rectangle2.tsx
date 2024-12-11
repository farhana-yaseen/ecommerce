import Image from "next/image"
import BrandName from "./BrandName"
import QualityProduct from "./QualityProduct"
import Mobile from "./Mobile"

const Rectangle2 = () => {
  return (
    <div>

      <div className="md:hidden">
        <Mobile />
      </div>

      <div className="relative m-auto hidden lg:block">

        <div className="absolute">
          <Image src={"/bigstar.png"} alt="bigstar" width={104} height={104} className="lg:w-[104px] lg:h-[104px] lg:mt-[220px] lg:ml-[1255px] object-contain"></Image>
        </div>

        <div className="absolute">
          <Image src={"/smallstar.png"} alt="star" width={56} height={56} className="lg:w-[56px] lg:h-[56px] lg:mt-[431px] lg:ml-[750px] object-contain"></Image>
        </div>

        <div className="lg:flex items-center justify-between">

          <div>
            <div className="lg:w-[577px] lg:h-[173px] lg:top-[237px] lg:left-[100px] absolute">
              <h1 className="font-Integral font-bold lg:text-[64px] lg:leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            </div>

            <div className="lg:w-[545px] lg:h-[33px] lg:top-[442px] lg:left-[100px] absolute">
              <h1 className="font-figtree font-normal lg:text-base lg:leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h1>
            </div>

            {/* Button */}
            <div className="absolute py-4 lg:w-[210px] lg:top-[507px] lg:left-[100px] rounded-[62px] bg-black">
              <h1 className="font-figtree font-medium text-base leading-[21.6px] text-white text-center">Shop Now</h1>
            </div>

            <div>
              <QualityProduct />
            </div>

            <div className="lg:w-[1440px] lg:h-[663px] lg:top-[134px] lg:left-[100px] bg-rectangleColor">
              <Image src={"/rectangle2.png"} alt="boygirl" width={1440} height={663} className="lg:w-[1440px] lg:h-[663px] lg:top-[134px] object-contain "></Image>
            </div>
          </div>
        </div>

        <div className="absolute">
          <BrandName />
        </div>
      </div>
    </div>

  )
}

export default Rectangle2
