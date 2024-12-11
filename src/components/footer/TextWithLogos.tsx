
import { BiLogoFacebook } from "react-icons/bi"
import { CgFacebook } from "react-icons/cg"
import {FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

const TextWithLogos = () => {
  return (
    <div>
        {/* Text */}
        <div className="lg:w-[248px] lg:h-[114px] flex flex-col justify-start gap-6 lg:gap-[25px] py-6">  
            <h1 className="w-[144px] h-5 top-[3804.58px] left-4 lg:w-[167px] lg:h-[23px] font-fjalla font-bold text-[28.85px] lg:text-[33.45px] leading-[34.62px] lg:leading-[40.15px]">SHOP.CO</h1>
            <h1 className="w-[357px] h-10 top-[3838.58px] left-[17px] lg:w-[248px] lg:h-[66px] font-figtree font-normal text-sm leading-[22px] opacity-60">We have clothes that suits your style and which you’re proud to wear. From women to men.</h1>
        </div>

        {/* Logos */}
        <div className="w-[148px] h-7 top-[3898.58px] left-4 flex justify-center items-center gap-2 lg:gap-3 py-12">
            {/* Social */}
            <div className="w-7 h-7 top-[3898.58px] left-4 lg:top-[149px] border-[1px] border-opacity-20 rounded-full bg-white flex justify-center items-center">
                {/* Twitter */}
                <FaTwitter className="w-[11.17px] h-[9.03px] top-[3908.52px] left-[25.03px]  lg:top-[158.94px] lg:left-[9.03px] object-contain"/>
            </div>

            <div className="w-7 h-7 top-[3898.58px] left-[56px] lg:top-[149px] border-[1px] border-opacity-20 rounded-full bg-black flex justify-center items-center">
                {/* Facebook */}
                <CgFacebook className="w-[6.32px] h-[12.17px] top-[3906px] left-[66.84px] lg:top-[157.13px] lg:left-[50.84px] object-contain text-white"/>
            </div>
            

            <div className="w-7 h-7 top-[3898.58px] left-[96px] lg:top-[149px] lg:left-[80px] border-[1px] border-opacity-20 rounded-full bg-white flex justify-center items-center">
                {/* Insta */}
                <FaInstagram   className="w-[6.32px] h-[12.17px] top-[3906px] left-[66.84px] lg:w-[13.55px] lg:h-[13.55px] lg:top-[156.23px] lg:left-[87.23px] object-contain"/>
            </div>


            <div className="w-7 h-7 top-[3898.58px] left-[136px] lg:top-[149px] lg:left-[120px] border-[1px] border-opacity-20 rounded-full bg-white flex justify-center items-center">
                {/* github */}
                <FaGithub className="w-[12.96px] h-[12.65px] top-[3905.81px] left-[144.13] lg:top-[156.23px] lg:left-[128.13px] object-contain"/>
            </div>

           
        </div>
     
    </div>
  )
}

export default TextWithLogos
