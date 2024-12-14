
import Image from 'next/image'

const LatestOffer = () => {
    return (
        <div className="w-[358px] h-[293px] top-[3480px] left-4 rounded-[20px] lg:w-[1240px] lg:h-[180px] lg:top-[3781px] lg:left-[100px] lg:px-16 lg:py-9 bg-black m-auto lg:flex lg:justify-between lg:items-center space-y-10 lg:space-y-4">
            
            <div className='w-[297px] h-[105px] top-8 ml-6 lg:w-[551px] lg:h-[94px] py-5 lg:py-1'>
            <h1 className="text-fjalla font-figtree font-bold text-[32px] leading-[35px] lg:text-[40px] lg:leading-[45px] text-white ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            </div>

            <div className="lg:w-[349px] lg:h-[108px] lg:gap-3.5">
                {/* Email 7 Subcribe */}
                <div className="w-[311px] h-[42px] top-[169px] ml-6 px-4 py-3  gap-3 lg:w-[349px] lg:h-12 lg:gap-3 rounded-[62px] bg-white">
                    {/* Email */}

                    <div className='flex items-center justify-start gap-3'>
                        <div className="w-5 h-5 lg:w-6 lg:h-6">
                            {/* logo */}
                            <Image src={"/email.png"} alt="Correction Sign" width={20.25} height={15.75} className="w-[16.88px] h-[13.13px] top-[3.44px] left-[1.56px] lg:w-[20.25px] lg:h-[22px] lg:top-[15.75px] lg:mt-[1.88px] opacity-40 object-contain"></Image>
                        </div>
                       
                        <h1 className="w-[160px] h-[19px] lg:w-[180px] lg:h-[22px] text-figtree font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] opacity-40">Enter your email address</h1>
                    </div>

            </div>
                <div className="w-[311px] h-[42px] top-[223px] mt-4 ml-6 lg:w-[349px] lg:h-[46px] rounded-[62px] px-4 py-3 gap-3 bg-white flex justify-center items-center">
                    {/* subcribe */}
                    <h1 className="w-[150px] h-[19px] lg:w-[172px] lg:h-[22px] text-figtree font-medium text-sm  lg:text-base leading-[18.9px] lg:leading-[21.6px] text-center">Subscribe to Newsletter</h1>
                </div>
                </div>

        </div>
    )
}

export default LatestOffer
