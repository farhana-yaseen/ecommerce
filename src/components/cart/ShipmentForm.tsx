
const ShipmentForm = () => {
  return (
    <div className="mt-10 font-serif">
        <h1 className="font-bold text-2xl">Billing Detail</h1>
        <div className="border-2 rounded-lg w-[750px]">

        <div className="flex flex-col justify-center items-center">
                    {/* Name */}
        <div className="flex gap-10 items-center mt-6">
            <div>
            <label htmlFor="fname" className="block">First Name:</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="text" placeholder="Enter your First Name" required/>
            </div>

            <div>
            <label htmlFor="lname" className="block">Last Name:</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="text" placeholder="Last Name" />
            </div>
        </div>

        {/* Company Name & Country */}
        <div className="flex gap-10 items-center  mt-6">
        <div>
            <label htmlFor="company" className="block">Company Name (optional):</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="text" placeholder="Company Name" />
            </div>

            <div>
            <label htmlFor="country" className="block">City</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="text" placeholder="Country" required/>
            </div>
        </div>

        {/* Town & Street Address */}
        <div className="flex gap-10 items-center  mt-6">
        <div>
            <label htmlFor="town" className="block">Town:</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="text" placeholder="Town Name" />
            </div>

            <div>
            <label htmlFor="street" className="block">Street Address</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="text" placeholder="Street Address" required/>
            </div>
        </div>

        {/* Phone & Email  */}
        <div className="flex gap-10 items-center mt-6">
        <div>
            <label htmlFor="phone" className="block">Phone No.:</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="tel" name="phone" id="phone" placeholder="(1234)7894591" required/>
            </div>

            <div>
            <label htmlFor="email" className="block">Email Address:</label>
            <input className="border-2 w-80 h-10 px-2 rounded-lg" type="email" name="email" id="email" required/>
            </div>
        </div>
    </div>

        {/* Note */}
        <div className="flex flex-col mt-6 mx-8">
            <h3>Order Note (Optional)</h3>
            <textarea className="border-2 w-[600px] h-60 px-2 rounded-lg" name="note" id="note" placeholder="Note about your order (e.g special notes for delivery)"></textarea>
        </div>

        {/* Button */}
        <div className="flex justify-center items-center my-6">
        <button className="bg-red-700 w-32 h-10 rounded-md text-white">Next</button>
        </div>
    </div>
    </div>


      
  )
}

export default ShipmentForm

