
import Image from 'next/image'

const LatestOffer = () => {
    return (
        <div className="w-[1240px] h-[180px] top-[3781px] left-[100px] rounded-[20px] px-16 py-9 bg-black m-auto flex justify-between items-center">
            <h1 className="w-[551px] h-[94px] text-fjalla font-figtree font-bold text-[40px] leading-[45px] text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>

            <div className="w-[349px] h-[108px] gap-3.5">
                {/* Email 7 Subcribe */}
                <div className="w-[349px] h-12 rounded-[62px] px-4 py-3  gap-3 bg-white flex flex-col space-y-3">
                    {/* Email */}

                    <div className='flex items-center justify-start gap-3'>
                        <div className="w-6 h-6">
                            {/* logo */}
                            <Image src={"/email.png"} alt="Correction Sign" width={20.25} height={15.75} className="top-[4.13px] ml-[1.88px] opacity-40 object-contain"></Image>
                        </div>
                       
                        <h1 className="w-[180px] h-[22px] text-figtree font-normal text-base leading-[21.6px] opacity-40">Enter your email address</h1>
                    </div>

                <div className="w-[349px] h-[46px] rounded-[62px] px-4 py-3 gap-3 bg-white flex justify-center items-center">
                    {/* subcribe */}
                    <h1 className="w-[172px] h-[22px] text-figtree font-medium text-base leading-[21.6px] text-center">Subscribe to Newsletter</h1>
                </div>
            </div>
                </div>

        </div>
    )
}

export default LatestOffer
