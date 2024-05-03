// import webvideo from "../assets/VIDEOS/ikigon-1-45sec-PLACA_1.mp4"
// import mobvideo from "../assets/VIDEOS/ikigon-1-45sec-PLACA-VERT_1.mp4"


 const Video = () => {
  return (
    <>
    <div className="mt-16 max-w-5xl mx-auto">
        <div className="sm:block hidden">
          {/* <video autoPlay controls width="100%" className="mx-auto">
            <source src={webvideo} type="video/mp4" className=""/>
            Sorry, your browser doesnot support embedded videos.
          </video> */}
        </div>
        <div className="sm:hidden block">
          {/* <video controls width="100%" className="mx-auto">
            <source src={mobvideo} type="video/mp4" className=""/>
            Sorry, your browser doesnot support embedded videos.
          </video> */}
        </div>
      </div>
    </>
  )
}

export default Video
