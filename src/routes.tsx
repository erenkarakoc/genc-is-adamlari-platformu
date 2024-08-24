import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Loading from "./components/Loading/Loading"

const Home = lazy(() => import("./pages/Home/Home"))
const Companies = lazy(() => import("./pages/Companies/Companies"))
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"))

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firmalar" element={<Companies />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
