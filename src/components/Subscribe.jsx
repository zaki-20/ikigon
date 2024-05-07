
const Subscribe = () => {
  return (
    <div className="mt-20 sm:mt-44 mb-20">
        <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-[18px] font-poppins text-[#6daec5] font-bold">SUBSCRIBE</h1>
            <p className="mt-4 text-[#4b71a6] text-[15px] font-roboto">
                Hai sa ramanem in contact si vei beneficia <br/> 
                de cele mai noi informatii si oferte.
            </p>
            <div className="flex justify-center items-center mt-10">
                <input type="text" placeholder="email@address" className="py-1 px-2 border border-[#86a5be] font-roboto text-[15px]" />
                <button className="bg-[#86a5be] px-6 py-1 font-roboto text-[15px] text-white border border-[#86a5be]">send</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe