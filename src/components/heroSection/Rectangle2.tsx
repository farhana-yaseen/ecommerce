import Image from "next/image"
import Link from "next/link"
import BrandName from "./BrandName"
import QualityProduct from "./QualityProduct"
import Mobile from "./Mobile"

const Rectangle2 = () => {
  return (
    <div className="xl:my-12">

      <div className="md:hidden">
        <Mobile />
      </div>

      <div className="relative m-auto hidden md:block">

        <div className="absolute animate-blink">
          <Image src={"/bigstar.png"} alt="bigstar" width={104} height={104} className="md:w-[95px] md:h-[95px] md:mt-[40px] md:ml-[650px] xl:w-[104px] xl:h-[104px] xl:mt-[220px] xl:ml-[1255px] object-contain"></Image>
        </div>

        <div className="absolute animate-blink">
          <Image src={"/smallstar.png"} alt="star" width={56} height={56} className="md:w-[70px] md:h-[70px] md:mt-[120px] md:ml-[400px] xl:w-[56px] xl:h-[56px] xl:mt-[431px] xl:ml-[750px] object-contain"></Image>
        </div>

        <div className="flex items-center justify-between">

          <div>
            <div className="md:w-[395px] md:h-[100px] md:top-[50px] md:left-[50px] xl:w-[577px] xl:h-[173px] xl:top-[237px] xl:left-[100px] absolute">
              <h1 className="font-Integral font-bold md:text-5xl leading-10 xl:text-[64px] xl:leading-[64px]">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            </div>

            <div className="md:w-[400px] md:h-[100px] md:top-[200px] md:left-[50px] xl:w-[545px] xl:h-[33px] xl:top-[442px] xl:left-[100px] absolute">
              <h1 className="font-figtree font-normal md:text-base md:leading-[22px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h1>
            </div>

            {/* Button */}
            <Link href={"/"}>
            <div className="absolute py-4 w-[150px] h-[40px] md:top-[290px] md:left-[50px] xl:w-[210px] xl:h-[52px] xl:top-[507px] xl:left-[100px] rounded-[62px] bg-black flex justify-center items-center cursor-pointer">
              <h1 className="font-figtree font-medium text-sm xl:text-base xl:leading-[21.6px] text-white text-center">Shop Now</h1>
            </div>
            </Link>

            <div>
              <QualityProduct />
            </div>

            <div className="md:w-[768px]  lg:w-[1024px] xl:w-[1440px] xl:h-[663px] xl:top-[134px] xl:left-[100px] bg-rectangleColor">
              <Image src={"/rectangle2.png"} alt="boygirl" width={1440} height={663} className="md:w-[768px] lg:w-[1024px] xl:w-[1440px] xl:h-[663px] xl:top-[134px] object-contain "></Image>
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
