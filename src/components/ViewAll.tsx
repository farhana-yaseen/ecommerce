"use client"
import { useState } from "react"


const ViewAll = () => {
  const [viewAll, setViewAll] = useState(false)
  return (

    <div className="flex justify-center items-center">

    <div className='w-[358px] h-[46px] top-[1524px] ml-16 lg:w-[218px] lg:h-[52px] lg:top-[1548px] lg:left-[611px] border-[1px] border-opacity-10 rounded-[62px] px-[54px] flex justify-center items-center'>
        <button onClick={()=>setViewAll(!viewAll)} className="w-[51px] h-[19px] lg:w-[75px] lg:h-[22px] font-figtree font-medium text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px] text-black text-center left-24 lg:left-6 cursor-pointer">{viewAll ? "View Less" : "View All"}</button>
      
    </div>

    </div>
  
  )
}

export default ViewAll
