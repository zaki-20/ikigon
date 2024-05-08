import Button from "./Button";
import imag from "../assets/PICS/imag.png"


const TipsSection = () => {
  return (
    <>

   <div className="py-10 hidden sm:block">
   <Button />
   </div>

      <div className="max-w-md sm:max-w-5xl mt-20 flex sm:flex-row flex-col border border-[#4b71a6b5] mx-auto py-10 px-5 sm:py-20 sm:px-10">
        <div className="sm:w-1/2 sm:border-r-[#4b71a6b5] sm:border-r  sm:px-10 px-4">
          <div className="">
            <h1 className="text-[18px] sm:text-[25px] text-[#264aa7] -mx-5 font-poppins font-semibold">Tips-uri de prezentare</h1>
            <p className="text-[#4b71a6] sm:text-[15px] text-[13px] -mx-5  font-roboto sm:mt-8 mt-4">
              Pentru ca experienta dezvaluirii unui Ikigon sa fie cat mai
              atractiva si placuta, va sugeram cateva tipsuri de prezentare:
            </p>
          </div>
          <div className="mt-6 sm:mt-12 ">
            <ul className="list-decimal sm:text-[15px] text-[13px] font-roboto font-bold text-[#4b71a6] ">
              <li className="">
              Ikigon-ul va fi tinut in maini, in dreptul bustului 
               sau in  dreptul soldurilor de catre cel ce il ofera 
               sau de catre orice alta persoana
              </li>
              <li className="mt-8">
              Distanta optima dintre persoana care tine 
              Ikigon-ul si cea care il dezvaluie este de dorit sa 
              fie intre 1, 5 si 2 metri in momentul desfasurarii.
              </li>
              <li className="mt-8">
              Desfasurarea spirale de vinil e de dorit sa nu fie 
              rapida, ci intr-un ritm relaxat astfel incat intreaga 
              exerienta sa poata fi procesata de cel sarbatorit
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-[#264aa7] mt-4 sm:hidden block -mx-5"/>
        <div className="sm:w-1/2 flex justify-center items-center">
            <div className="text-5xl text-bold text-blue-950 ">
                <img src={imag} alt="" />
              </div>      
        </div>
      </div>


    </>
  );
};

export default TipsSection;
