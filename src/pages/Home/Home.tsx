import "./Home.css"

import Hero from "./components/Hero/Hero"
import Announcements from "./components/Announcements/Announcements"
import Events from "./components/Events/Events"
import WhoIs from "./components/WhoIs/WhoIs"
import HomeCompanies from "./components/HomeCompanies/HomeCompanies"
import HomePresident from "./components/HomePresident/HomePresident"

const Home: React.FC = () => {
  return (
    <div className="page" id="page-home">
      <Hero />
      <Announcements />
      <Events />
      <HomeCompanies />
      <WhoIs />
      <HomePresident />
    </div>
  )
}

export default Home
