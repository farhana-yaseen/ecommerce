import Alex from "./Alex"
import Ava from "./Ava"
import Ethan from "./Ethan"
import Liam from "./Liam"
import Olivia from "./Olivia"
import Samantha from "./Samantha"


const UserReview = () => {
  return (
      
    <div className="flex flex-col lg:grid grid-cols-2 place-items-center gap-10 lg:gap-16">
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
