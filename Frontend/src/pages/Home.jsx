import Landing from "../components/Landing"
import Landing2 from "../components/Landing2"
import Navbar from "../components/Navbar"


function Home() {
  return (
    <div className="bg-neutral-100">
        <Navbar/>
        <Landing/>
        <Landing2/>
    </div>
  )
}

export default Home