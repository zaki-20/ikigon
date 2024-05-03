import Features from "./Features"
import Gallery from "./Gallery"
import Gallery2 from "./Gallery2"
import Subscribe from "./Subscribe"
import Table from "./Table"
import TipsSection from "./TipsSection"
import VideoSection from "./VideoSection"

const Body = () => {
  return (
    <>
    <VideoSection />
    <div className="lg:mx-0 mx-10">
    <Table />
    <Gallery />
    <Features />
    <Gallery2 />
    <TipsSection />
    <Subscribe />
</div>
    </>
 
  )
}

export default Body