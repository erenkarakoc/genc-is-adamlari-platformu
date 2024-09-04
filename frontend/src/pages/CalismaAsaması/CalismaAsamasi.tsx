/* eslint-disable jsx-a11y/anchor-has-content */
import { memo } from "react"
import PageHeader from "../../components/PageHeader/PageHeader"
import "./CalismaAsamasi.css"

const CalismaAsamasi: React.FC = () => {
  return (
    <div className="page" id="page-companies">
      <PageHeader
        pageTitle="Çalışma Aşaması"
        breadcrumbs={[
          { title: "Ana Sayfa", path: "/" },
          { title: "Çalışma Aşaması", path: "/calisma-asamasi" },
          
        ]}
      />
      <div className="container">
        <div className="row">
          
          <div className="col-lg-9">
            <h3 className="section-title mb-3">
              <span>Çalışma Aşaması</span>
            </h3>
            <p className="user-detail-about">
             Bu sayfa şu anda çalışma aşamasındadır. En kısa sürede hizmetinize sunulacaktır.
            </p>
            
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default memo(CalismaAsamasi)
