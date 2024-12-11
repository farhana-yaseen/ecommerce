import Image from "next/image"

const MobileDressStyle = () => {
  return (
    <div className="w-[358px] h-[975px] top-[2123px] left-4 rounded-[20px] bg-searchColor m-auto">
      <div>
       <h1 className="w-[246px] h-[27px] mt-10 ml-[56px] font-fjalla font-bold text-[32px] leading-[36px] text-center pt-5">BROWSE BY DRESS STYLE</h1>
      </div>
      
      <div className="">
        {/* Casual */}
        <div className="w-[310px] h-[190px] top-[120px] ml-6 rounded-[20px] bg-white relative">
          <h1 className="w-[76px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Casual</h1>
          <Image src={"/dressStyle/casual.png"} alt="Casual" width={572} height={383} className="top-[-75px] left-[401px] object-contain rounded-[20px] "></Image>
        </div>

        {/* Formal */}
        <div className="w-[310px] h-[190px] top-[250px] ml-6 rounded-[20px] bg-white relative">
          <h1 className="w-[77px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Formal</h1>
          <Image src={"/dressStyle/formal.png"} alt="Formal" width={709} height={472} className="mt-[-88px] left-[-17px] object-contain rounded-[20px]"></Image>
        </div>

      {/* Party */}
      <div className="w-[310px] h-[190px] top-[345px] left-6 rounded-[20px] bg-white relative">
        <h1 className="w-[59px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Party</h1>
        <Image src={"/dressStyle/party.png"} alt="Party" width={389} height={311} className="mt-[-82px] object-contain rounded-[20px]"></Image>
      </div>

      {/* Gym */}
      <div className="w-[310px] h-[190px] top-[400px] left-6 rounded-[20px] bg-white relative ">
        <h1 className="w-[53px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Gym</h1>
        <Image src={"/dressStyle/gym.png"} alt="Gym" width={285} height={425} className="mt-[-90px] left-[70px] object-contain rounded-[20px]"></Image>
      </div>
</div>

    </div>
  )
}

export default MobileDressStyle
