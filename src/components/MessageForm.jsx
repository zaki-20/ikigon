import { useState } from "react";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import { IoMdBarcode } from "react-icons/io";

const MessageForm = () => {
    const [email, setEmail] = useState("")
    const [couponCode, setCouponCode] = useState("")
    const [message, setMessage] = useState("")

   const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email,
      couponCode,
      message
    }
    console.log(data)
   }
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-gray-100">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-[#86a5be] sm:text-3xl">
            Enter Credentials
          </h1>
         
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
           
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                 <MdOutlineMail className="text-gray-400"/>
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Coupon Code
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={couponCode}
                  onChange={(e)=>setCouponCode(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Coupon Code"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <IoMdBarcode className="text-gray-400"/>

                </span>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <div className="relative">
                <textarea
                 value={message}
                 onChange={(e)=>setMessage(e.target.value)}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter you message"
                  rows={5}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-start p-4">
                <MdOutlineMessage className="text-gray-400"/>

                </span>
              </div>
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-[#86a5be] px-5 py-3 text-sm font-medium text-white"
            >
              Send
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
