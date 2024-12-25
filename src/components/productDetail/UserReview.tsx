import Alex from "./Alex"
import Ava from "./Ava"
import Ethan from "./Ethan"
import Liam from "./Liam"
import Olivia from "./Olivia"
import Samantha from "./Samantha"


const UserReview = () => {
  return (
      
    <div className="flex flex-wrap xl:grid grid-cols-2 place-items-center gap-2 lg:gap-12 xl:gap-16 mt-16">
      <Samantha/>
      <Alex/>
      <Ethan/>
      <Olivia/>
      <Liam/>
      <Ava/>
      </div>
  )
}

export default UserReview
