
import Rectangle2 from "@/components/Rectangle2";
import NewArrivals from "@/components/arrivalItems/NewArrivals";
import TopSelling from "@/components/sellingItems/TopSelling";
import DressStyle from "@/components/DressStyle";
import HappyCustomers from "@/components/HappyCustomers";

export default function Home() {
  return (
    <div className="w-full h-full lg:w-full lg:h-full">
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
