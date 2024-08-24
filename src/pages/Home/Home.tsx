import "./Home.css"

import Hero from "./components/Hero/Hero"
import WhoIs from "./components/WhoIs/WhoIs"
import Announcements from "./components/Announcements/Announcements"

const Home: React.FC = () => {
  return (
    <div className="page" id="page-home">
      <Hero />
      <WhoIs />
      <Announcements />
    </div>
  )
}

export default Home
