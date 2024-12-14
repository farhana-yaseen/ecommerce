
import Image from 'next/image'

const PaymentLogo = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center p-5 lg:mx-16'>
        <div className="w-[269px] h-[19px] top-[4263px] left-[100px]">
            {/* Text */}
            <h1 className="font-figtree font-normal text-sm leading-[18.9px] opacity-60">Shop.co © 2000-2023, All Rights Reserved</h1>
        </div>

        <div className="w-[281.07px] h-[30.03px] top-[4258px] left-[1059px] gap-3 flex justify-center items-center">
            {/* Logos */}
            <div className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px] border-paymentLogo shadow-custom flex justify-center items-center bg-white">
                {/* VISA */}
                <Image src={"/paymentLogo/visa.png"} alt="VISA" width={32.54} height={10.51} className="w-[32.54px] h-[10.51px] top-[9.94px] left-[6.91px] object-contain"></Image>
            </div>

            <div className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px] border-paymentLogo shadow-custom bg-white">
                {/* Master Card */}
                <Image src={"/paymentLogo/mastercard.png"} alt="Master Card" width={25.38} height={15.69} className="mt-[7.17px] ml-[10.53px] object-contain"></Image>
            </div>

            <div className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px] border-paymentLogo shadow-custom bg-white">
                {/* Paypal */}
                <Image src={"/paymentLogo/paypal.png"} alt="PayPal" width={34.55} height={9.21} className="mt-[10.65px] ml-[6.05px] object-contain"></Image>
            </div>
            
            <div className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px] border-paymentLogo shadow-custom bg-white">
                {/* Pay */}
                <Image src={"/paymentLogo/pay.png"} alt="Pay" width={26.41} height={11.21} className="mt-[9.64px] ml-[10.08px] object-contain"></Image>
            </div>

            <div className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px] border-paymentLogo shadow-custom bg-white">
                {/* G Pay */}
                <Image src={"/paymentLogo/gpay.png"} alt="G Pay" width={100} height={100} className="w-[28.56px] h-[11.21px] mt-[9.86px] ml-[8.96px] object-contain"></Image>
            </div>
        </div>
      
    </div>
  )
}

export default PaymentLogo
