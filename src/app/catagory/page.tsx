import CatagoryLg from "@/components/catagory/CatagoryLg"
import NavCata from "@/components/catagory/NavbarCata"
import ProductWithPrice from "@/components/catagory/ProductWithPrice"




const Catagory = () => {
  return (
    <div className="w-[390px] lg:w-[1440px] gap-4 lg:gap-8 flex flex-col">

      <NavCata/>

      <div className="lg:hidden">
      <ProductWithPrice/>
      </div>
      <div className="hidden lg:block">
        <CatagoryLg/>
      </div>
      
    </div>
  )
}

export default Catagory
