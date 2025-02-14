"use client"

import { useState } from "react"
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Image from "next/image"
import { Product } from "@/type";
import { useCart } from "@/CartContextProvider";
import Link from "next/link";

interface TopSellingItems {
  products: Product[]
}

const TopSelling = ({products}:TopSellingItems) => {


    const [viewAll, setViewAll] = useState(false)
    
  const { addToCart } = useCart()
    const handleAddToCart = (product:Product, color:string, size:string) => {
      addToCart(product, color, size);  // Add item to the cart
      alert(`${product.name} has been added to your cart!`);
    };
  
  
    const itemsToDisplay = viewAll ? products : products.slice(0, 4); // Show all or just the first 4 items
  return (
    <div className="mt-12 lg:mt-20">
      <div className="w-[231px] h-[38px] top-[1650px] ml-20 xl:w-[346px] md:w-full lg:w-full xl:h-[58px] xl:top-[1728px] xl:ml-[546px] flex justify-center items-center">
      <h1 className="font-fjalla font-bold text-[32px] lg:text-5xl leading-[38.4px] lg:leading-[57.6px] text-center uppercase">Top Selling</h1>
      </div>

         {/* image and detail start*/}
               <div className="my-10 grid grid-cols-2 md:grid-cols-3  gap-8 xl:grid-cols-4">
         
               {
             itemsToDisplay.map((p: Product) => {
               return (
                 <div key={p._id} className="w-[210px] h-[270px] top-[1217px] left-4 md:left-6 lg:w-[310px] lg:h-[380px] lg:top-[1104px] lg:left-[100px] mx-2">
         <Link href={`/product/${p._id}`}>
                   {/* for image */}
                   <div className="w-[198px] h-[200.01px] top-[1217px] left-4 md:left-6 lg:w-[295px] lg:h-[298px] lg:top-[1104px] lg:left-[100px] bg-newArravialbg rounded-[13.42px] lg:rounded-[20px] overflow-hidden mx-2">
                     <span className="p-1 lg:p-2 rounded-md font-figtree font-bold text-[10px] lg:text-sm bg-starColor text-red-700 absolute">Top Selling</span>
                     <Image src={p.imageUrl} alt={p.name} width={295} height={295} layout="responsive" className="w-full h-full top-[-73px] left-[-1px] object-contain" />
                   </div>
                   </Link>
                   {/* for text */}
                   <div className="flex flex-col justify-center">
         
                     {/* for name */}
                     <div className="w-[180px] h-[22px] top-[1427.01px] ml-4 lg:w-[280px] lg:h-[27px] lg:top-[1418px] lg:left-[100px]">
                       <p className="font-figtree font-bold text-base lg:text-xl leading-[21.6px] lg:leading-[27px] capitalize">{p.name}</p>
                     </div>
         
                     {/* Star & Price */}
                     <div className="w-[127px] h-4 top-[1453.01px] ml-4 gap-[11px] lg:w-[160.7px] lg:h-[19px] lg:top-[2190px] lg:left-[100px] lg:gap-[13px] flex justify-center items-center">
                       {/* Star */}
                       <div className="w-[87px] h-[15.47px] gap-[4.44px] lg:w-[113.7px] lg:h-[18.49px] lg:gap-[5.31px] flex justify-center items-center">
                         <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                         <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                         <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                         <BsStarFill className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                         <BsStarHalf className="text-starColor w-[15.47px] h-[15.47px] lg:w-[18.49px] lg:h-[18.49px]" />
                       </div>
         
                       {/* for rate */}
                       <div className="w-[29px] h-4 lg:w-[34px] lg:h-[19px]">
                         {/* Optional Rate */}
                       </div>
                     </div>
         
                     {/* Price */}
                     <div className="w-[46px] h-[27px] top-[1473px] ml-4 lg:w-[55px] lg:h-8 lg:top-[1480px] lg:left-[100px] lg:gap-[10px]">
                       <h1 className="font-figtree font-bold text-xl lg:text-2xl leading-[27px] lg:leading-[32.4px]">${p.price}</h1>
                     </div>

                     {/* Add to Cart button */}
                  <div onClick={() => handleAddToCart(p,p.sizes[2], p.colors[1])} className="mx-auto cursor-pointer">
                    <button className="font-figtree font-bold text-base lg:text-xl text-center text-red-600 bg-starColor w-40 h-7 lg:w-60 lg:h-9 rounded-lg ">Add to Cart</button>
                  </div>
         
                   </div>
         
                 </div>
               )
             })
           }
         
               </div>
               {/* image and detail end*/}
         
        {/* button and line */}

      {/* View All Button */}
      <div onClick={() => setViewAll(!viewAll)} className="w-[358px] h-[46px] top-[1524px] ml-16 lg:w-[218px] lg:h-[52px] lg:top-[1548px] lg:ml-[611px] border-[1px] border-opacity-10 rounded-[62px] px-[54px] flex justify-center items-center cursor-pointer lg:mb-10">
        <button className="w-[75px] h-[19px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-black text-center left-24 lg:left-6">
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>

      {/* Line */}
      <div className="w-[358px] top-[1610px] ml-6 md:w-[700px] md:ml-12 lg:w-[900px] xl:w-[1240px] xl:top-[1664px] xl:ml-[100px] border-[1px] border-opacity-10 mx-auto"></div>

    </div>
  )
}

export default TopSelling
