import AppRoutes from "./routes"

import "./assets/reset.css"
import "./assets/fonts/fonts.css"
import "./assets/variables.css"
import "./assets/theme.css"
import "./assets/responsive.css"

import Header from "./components/Header/Header"

function App() {
  return (
    <main id="layout">
      <Header />
      <div id="content">
        <AppRoutes />
      </div>
    </main>
  )
}

export default App
