/* eslint-disable jsx-a11y/anchor-has-content */
import PageHeader from "../../../components/PageHeader/PageHeader"
import "./CompanyDetail.css"

const CompanyDetail: React.FC = () => {
  return (
    <div className="page" id="page-companies">
      <PageHeader
        pageTitle="The Fonext"
        pageDesc="Günümüz iş dünyasında sürekli değişim ve dönüşüm yaşanırken, FoNext olarak işletmenizin bu süreçte teknolojik gelişmelere uyum sağlamasını, iş süreçlerini iyileştirmesini ve dijitalleşmeyle birlikte büyümesini sağlamak için stratejik destek sunuyoruz."
        breadcrumbs={[
          { title: "Ana Sayfa", path: "/" },
          { title: "Firmalar", path: "/firmalar" },
          { title: "The Fonext", path: "/firmalar/the-fonext" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="company-detail-image">
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="section-title mb-5">
              <span>Fonext Hakkında</span>
            </h3>
            <p className="company-detail-about">
              Fonext’e hoş geldiniz; yenilikçi dijital pazarlama ve yönetim
              danışmanlığının güvenilir adresi. Dijital pazarlama
              stratejilerinden yönetim danışmanlığına, özel yazılım çözümlerine
              kadar iş süreçlerinizi dönüştürmeyi amaçlayan bir ekibiz.
              Teknolojiyi ve yenilikçi düşünceyi temel alarak, işletmelerin
              büyüme, verimlilik ve yenilikçilik potansiyelini ortaya çıkarmak
              bizim işimiz. <br />
              Biz, Fonext olarak, dijital stratejilerden operasyonel
              mükemmelliğe, işinize özel yenilikçi çözümler sunuyoruz.
              Sektördeki derin bilgi birikimimiz ve tecrübemizle, dijital çağda
              işlerinizi bir adım öne taşıyor, sürdürülebilir başarı için
              sizlere eşlik ediyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail
