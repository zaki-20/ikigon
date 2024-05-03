import Button from "./Button";
import img1 from '../assets/Untitled-1-06.png'; 
import img2 from '../assets/Untitled-1-05.png'; 
import img3 from '../assets/Untitled-1-03.png'; 
import img4 from '../assets/Untitled-1-04.png'; 
import { Suspense, lazy } from 'react';

const Video = lazy(() => import('./Video'));

const VideoSection = () => {

  return (
    <>

      <div className="lg:mx-0 sm:mx-10">
      <div className="text-center mt-20 max-w-6xl mx-auto">
        <div className="">
          <h1 className="font-roboto font-bold text-[#264aa7] text-[39px] sm:text-[33px] ">
            CAUTI UN CADOU... WOW?
          </h1>
        </div>
        <div className="mt-2 hidden sm:block">
          <h1 className=" text-[#13629c] font-poppins text-[20px]">
            Transforma o fotografie intr-o fascinanta experienta interactiva.
          </h1>
        </div>
        <div className="mt-2 hidden sm:block">
          <h1 className="font-semibold text-[#264aa7] font-poppins text-[21px]">
            Surpriza. Interactiune. Fun.
          </h1>
        </div>
      </div>
      </div>
        
        <div className="">
        <Suspense fallback={<div className="animate-pulse text-center">Loading...</div>}>
            <Video />
        </Suspense>
        </div>
       
      <p  className="sm:hidden block max-w-md  text-center mt-10 sm:mx-auto mx-10 text-[22px] text-[#244ca8] font-poppins font-bold">
          Transforma o fotografie intr-o fascinanta experienta interactiva. Surpriza. Interactiune. Fun.
      </p>

        <div  id="comanda">
            <Button />
        </div>
    

    <div className="lg:mx-0 mx-10">
     <div className="sm:mt-32 mt-20 max-w-md sm:max-w-4xl  mx-auto">
        <div className="">
          <h1 className="sm:text-[30px] text-[25px] font-semibold font-poppins text-[#134693]">
            Cauti un cadou special?
          </h1>
          <p className="mt-7 text-[15px] font-roboto  text-[#4b71a6] leading-8  text-justify">
            Cadourile pot deveni un subiect sensibil, mai ales atunci cand intri
            in criza de timp, si cum succesul unui cadou este determinat de
            multi factori, de multe ori alegerea lui ajunge sa se transforme
            intr-o adevarata bataie de cap. Si pentru ca stim toate astea din
            proprie experienta, am conceput Ikigon, un cadou care nu tine cont
            de varsta, mediu social, preferinte, sau personalitate si despre
            care putem spune cu convingere ca este unul dintre foarte putinele
            cadouri cu care nu poti da gres indiferent de situatie. De ce?
            Pentru ca este un cadou surpriza ce implica interactiune, starneste
            zambete si creeaza emotii. Iar toate astea la un loc ne fac sa
            spunem ca Ikigon este cadoul perfect
          </p>
        </div>
      </div>

      <div className="mt-32 max-w-md sm:max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3">

      <div className="flex flex-col justify-start relative bg-[#c9cee0] p-4 sm:p-6 ">
          <h5 className="mb-2 text-[#244ca8] text-[16px] font-poppins font-semibold ">
            Surprizator 
          </h5>
          <div>
          <h6 className="mt-3 sm:mt-6 font-roboto text-[11px] font-medium text-white">Starneste emotii</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Creaza atmosfera</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Uneste</h6>
          </div>
          <div className="h-full flex items-end mt-8 sm:mt-10">
            <img src={img1} alt="" className="w-12 sm:w-20  sm:mt-6" />
          </div>
        </div>

        <div className="flex flex-col justify-start  relative bg-[#959fca] p-4 sm:p-6 ">
          <h5 className="mb-2 text-[#244ca8] text-[16px] font-poppins font-semibold ">
          Interactiv 
          </h5>
          <div>
          <h6 className="mt-3 sm:mt-6 font-roboto text-[11px] font-medium text-white">Participare</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Incredere</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Bucurie</h6>
          </div>
          <div className="h-full flex items-end mt-8 sm:mt-10">
            <img src={img2} alt="" className="w-12  sm:w-20  sm:mt-6" />
          </div>
        </div>

        <div className="flex flex-col justify-start  relative bg-[#c9cee0] p-4 sm:p-6 ">
          <h5 className="mb-2 text-[#244ca8] text-[16px] font-poppins font-semibold ">
          Memorabil
          </h5>
          <div>
          <h6 className="mt-3 sm:mt-6 font-roboto text-[11px] font-medium text-white">Creaza amintiri</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Fara varsta</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Inspira</h6>
          </div>
          <div className="h-full flex items-end mt-8 sm:mt-10">
            <img src={img3} alt="" className="w-12 sm:w-20 sm:mt-6" />
          </div>
        </div>

        <div className="flex flex-col justify-start  relative bg-[#959fca] p-4 sm:p-6 ">
          <h5 className="mb-2 text-[#244ca8] text-[16px] font-poppins font-semibold ">
          Viralizare
          </h5>
          <div>
          <h6 className="mt-3 sm:mt-6 font-roboto text-[11px] font-medium text-white">Instagramabil</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Subiectu petrecerii</h6>
          <h6 className="mt-1 font-roboto text-[11px] font-medium text-white">Se vorbeste</h6>
          </div>
          <div className="h-full flex items-end mt-8 sm:mt-10">
            <img src={img4} alt="" className="w-12 sm:w-20 sm:mt-6" />
          </div>
        </div>

      </div>

      <div className="mt-20 sm:mt-32 max-w-md  sm:max-w-6xl mx-auto">
          <div className="border border-blue-500 p-2 w-fit mx-auto">
            <div className="border border-blue-500 py-5 px-8">
              <span className="sm:text-[30px] text-[25px] font-poppins font-bold text-[#244ca8]">
                Pret: 1.399 ron
              </span>
            </div>
          </div>

      </div>
     </div>
    </>
  );
};

export default VideoSection;
