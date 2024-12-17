import BlackStriped from "./BlackStriped"
import GradiantGraphic from "./GradiantGraphic"
import Polo from "./Polo"
import PoloWithTipping from "./PoloWithTipping"



const AlsoLike = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-10 lg:my-16">
                <h1 className="font-fjalla font-bold text-[32px] lg:text-[40px] leading-[36px] lg:leading-[48px] text-center uppercase w-[284px] h-[72px] top-[2127px] ml-[53px] lg:w-[600px] lg:h-[48px] lg:top-[216px] lg:left-[750px]">You might also like</h1>
            </div>

            <div className="flex justify-center items-center lg:gap-5">
            <Polo />
            <GradiantGraphic />
            <PoloWithTipping/>
            <BlackStriped/>

            </div>

        </div>
    )
}

export default AlsoLike
