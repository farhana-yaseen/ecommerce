import Image from "next/image"
import MobileDressStyle from "./MonbileDressStyle"

const DressStyle = () => {
  return (
    <div className="mb-10">
      <div className="md:hidden">
        <MobileDressStyle/>
      </div>
      <div className="hidden lg:block w-[1239px] h-[866px] top-[2417px] ml-[100px] rounded-[40px] bg-searchColor">
      <div>
       <h1 className="w-[687px] h-[58px] top-[70px] ml-[276px] font-fjalla font-bold text-5xl leading-[57.6px] text-center pt-10">BROWSE BY DRESS STYLE</h1>
      </div>
      
      <div className="flex items-center">
        {/* Casual */}
        <div className="w-[407px] h-[289px] top-[100px] left-16 rounded-[20px] bg-white relative">
          <h1 className="w-[114px] h-[49px] top-[25px] left-[36px] font-figtree font-bold text-4xl leading-[48.6px] absolute">Casual</h1>
          <Image src={"/dressStyle/casual.png"} alt="Casual" width={973} height={649} className="w-full h-full top-[-122px] left-[626px] object-contain rounded-[20px]"></Image>
        </div>

        {/* Formal */}
        <div className="w-[684px] h-[289px] top-[100px] left-[100px] rounded-[20px] bg-white relative">
          <h1 className="w-[116px] h-[49px] top-[25px] left-[36px] font-figtree font-bold text-4xl leading-[48.6px] absolute">Formal</h1>
          <Image src={"/dressStyle/formal.png"} alt="Formal" width={1306} height={870} className="w-full h-full top-[-146px] object-contain rounded-[20px]"></Image>
        </div>
      </div>
<div className="flex items-center">
      {/* Party */}
      <div className="w-[684px] h-[289px] top-[150px] left-16 rounded-[20px] bg-white relative">
        <h1 className="w-[89px] h-[49px] top-[25px] left-[36px] font-figtree font-bold text-4xl leading-[48.6px] absolute">Party</h1>
        <Image src={"/dressStyle/party.png"} alt="Party" width={770} height={616} className="w-full h-full top-[-163px] left-[42px] object-contain rounded-[20px]"></Image>
      </div>

      {/* Gym */}
      <div className="w-[407px] h-[289px] top-[150px] left-[100px] rounded-[20px] bg-white relative ">
        <h1 className="w-[80px] h-[49px] top-[25px] left-[36px] font-figtree font-bold text-4xl leading-[48.6px] absolute">Gym</h1>
        <Image src={"/dressStyle/gym.png"} alt="Gym" width={452} height={677} className="w-full h-full top-[-148px] left-[53px] object-contain rounded-[20px]"></Image>
      </div>
</div>
</div>

    </div>
  )
}

export default DressStyle
