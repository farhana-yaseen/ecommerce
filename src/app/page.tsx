
import Rectangle2 from "@/components/heroSection/Rectangle2";
import NewArrivals from "@/components/arrivalItems/NewArrivals";
import TopSelling from "@/components/sellingItems/TopSelling";
import HappyCustomers from "@/components/happyCustomers/HappyCustomers";
import DressStyle from "@/components/dressStyle/DressStyle";

export default function Home() {
  return (
    <div className="w-[390px] md:w-full xl:w-[1440px] m-auto">
      <Rectangle2 />
      <div className="">
      <NewArrivals/>
      </div>
      <div className="">
      <TopSelling/>
      </div>
      <div className="">
      <DressStyle/>
      </div>
      <HappyCustomers/>
  
    </div>
  );
}
