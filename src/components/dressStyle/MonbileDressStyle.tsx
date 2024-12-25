import Image from "next/image"

const MobileDressStyle = () => {
  return (
    <div className="flex justify-center items-center my-16">
    <div className="w-[358px] h-[975px] top-[2123px] ml-4 md:w-[550px] md:h-[1250px] rounded-[20px] bg-searchColor">
      <div className="flex justify-center items-center">
       <h1 className="w-[246px] h-[27px] md:w-[400px] md:h-8 mt-10 left-[56px] font-fjalla font-bold text-[32px] md:text-4xl leading-[36px] text-center my-6">BROWSE BY DRESS STYLE</h1>
      </div>
      
      <div>
        {/* Casual */}
        <div className="w-[310px] h-[190px] top-[40px] left-6 md:w-[500px] md:h-[250px] rounded-[20px] bg-white relative">
          <h1 className="w-[76px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Casual</h1>
          <Image src={"/dressStyle/casual.png"} alt="Casual" width={572} height={383} className="w-full h-full top-[-75px] left-[401px] xl:object-contain object-fill rounded-[20px]"></Image>
        </div>

        {/* Formal */}
        <div className="w-[310px] h-[190px] top-[150px] ml-6 md:w-[500px] md:h-[250px] rounded-[20px] bg-white relative">
          <h1 className="w-[77px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Formal</h1>
          <Image src={"/dressStyle/formal.png"} alt="Formal" width={709} height={472} className="w-full h-full mt-[-88px] left-[-17px] xl:object-contain object-fill rounded-[20px]"></Image>
        </div>

      {/* Party */}
      <div className="w-[310px] h-[190px] top-[250px] left-6 md:w-[500px] md:h-[250px] rounded-[20px] bg-white relative">
        <h1 className="w-[59px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Party</h1>
        <Image src={"/dressStyle/party.png"} alt="Party" width={389} height={311} className="w-full h-full mt-[-82px] xl:object-contain object-fill rounded-[20px]"></Image>
      </div>

      {/* Gym */}
      <div className="w-[310px] h-[190px] top-[360px] left-6 md:w-[500px] md:h-[250px] rounded-[20px] bg-white relative ">
        <h1 className="w-[53px] h-8 top-4 left-6 font-figtree font-bold text-2xl leading-[32.4px] absolute">Gym</h1>
        <Image src={"/dressStyle/gym.png"} alt="Gym" width={285} height={425} className="w-full h-full mt-[-90px] left-[70px] xl:object-contain object-fill rounded-[20px]"></Image>
      </div>
</div>

    </div>
    </div>
  )
}

export default MobileDressStyle
