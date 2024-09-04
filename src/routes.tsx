import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Loading from "./components/Loading/Loading"
import OrganizationSchema from "./pages/Organization/OrganizationSchema/OrganizationSchema"
import CompanyDetailFonext from "./pages/Companies/CompanyDetail/CompanyDetailFonext"
import CompanyDetailKeya from "./pages/Companies/CompanyDetail/CompanyDetailKeya"
import Komisyonlar from "./pages/Komisyonlar/Komisyonlar"

const Home = lazy(() => import("./pages/Home/Home"))
const Companies = lazy(() => import("./pages/Companies/Companies"))
const UserDetail = lazy(
  () => import("./pages/UserDetail/UserDetail")
)
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"))

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/firmalar" element={<Companies />} />
          <Route path="/organizasyon-yapisi" element={<OrganizationSchema />} />
          <Route path="/firmalar/the-fonext" element={<CompanyDetailFonext />} />
          <Route path="/firmalar/keya-real-estate" element={<CompanyDetailKeya />} />
          <Route path="/kullanicilar/ismail-yildirim" element={<UserDetail />} />
          <Route path="/komisyonlar" element={<Komisyonlar />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRoutes
