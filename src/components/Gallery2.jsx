import img1 from '../assets/PICS/FOR FIVERR/BORDS/1.jpg'; 
import img2 from '../assets/PICS/FOR FIVERR/BORDS/2.jpg'; 
import img3 from '../assets/PICS/FOR FIVERR/BORDS/3.jpg'; 
import img4 from '../assets/PICS/FOR FIVERR/BORDS/4.jpg'; 
import img5 from '../assets/PICS/FOR FIVERR/BORDS/5.jpg'; 
import img6 from '../assets/PICS/FOR FIVERR/BORDS/6.jpg'; 

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import ModalImage from "react-modal-image";



const Gallery2 = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const imageUrls = 
  [
    img1,img2,img3,img4,img5,img6
  ];
  return (
    <div className="bg-gray-200 sm:py-36 py-12 mt-20 ">
        

    <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md sm:max-w-3xl mx-auto bg-[#ff520d2]">
      {
        imageUrls.map((imageUrl, index) => (
          <div key={index} className=" ">
              <ModalImage
                className='h-auto max-w-full'
                small={imageUrl}
                large={imageUrl}
                alt="gallery"
                hideDownload
          />
          </div>
        ) )
      }
    </div>
    <div className="sm:hidden mx-10 py-10">
        <AutoplaySlider className="h-80" play={true} cancelOnInteraction={false} organicArrows={false} animation={true}>
        {
        imageUrls.map((imageUrl, index) => (
          <div className=" w-full h-full" key={index}  >
            <img src={imageUrl} alt="" className='object-cover w-full h-full'/>
          </div>
        ) )
      }
      </AutoplaySlider>
    </div>

    
       </div>
  )
}

export default Gallery2