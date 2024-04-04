import Footer from "../components/Footer"
import Landing from "../components/Landing"
import Landing2 from "../components/Landing2"
import Navbar from "../components/Navbar"
import SearchRide from "../components/SearchRide"

function Home() {
  return (
    <div className="bg-neutral-100">
        <Navbar/>
        <Landing/>
        <SearchRide/>
        <Landing2/>
        <Footer/>
    </div>
  )
}

export default Home