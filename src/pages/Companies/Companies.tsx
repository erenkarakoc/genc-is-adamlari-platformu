/* eslint-disable jsx-a11y/anchor-has-content */
import PageHeader from "../../components/PageHeader/PageHeader"
import "./Companies.css"

const Companies: React.FC = () => {
  return (
    <div className="page" id="page-companies">
      <PageHeader
        pageTitle="Firmalar"
        pageDesc="Genç İş Adamları Platformu çatısı altında bir araya gelerek işbirliği yapan ve ticari faaliyetlerini geliştiren firmalara göz atın. İş ortaklıklarını keşfetmek ve bağlantılar kurmak için bu listeyi inceleyin."
        breadcrumbs={[
          { title: "Ana Sayfa", path: "/" },
          { title: "Firmalar", path: "/firmalar" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="company-item">
              <a href="/firmalar/the-fonext" className="card-overlay"></a>
              <div className="company-item-img">
                <img src="/assets/images/companies/logo-1.png" alt="The Fonext" />
              </div>
              <div className="company-item-title">The Fonext</div>
              <div className="company-item-desc">
                Fonext olarak, AI teknolojilerini anlamınız ve entegre etmeniz
                için size rehberlik ediyoruz.
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="company-item">
              <a href="/firmalar/the-fonext" className="card-overlay"></a>
              <div className="company-item-img">
                <img
                  src="/assets/images/companies/logo-2.png"
                  alt="Keya Real Estate"
                />
              </div>
              <div className="company-item-title">Keya Real Estate</div>
              <div className="company-item-desc">
                Uzun yıllardır gayrimenkul sektöründe etkin pazarlama ve
                danışmanlık hizmetleri vermekteyiz.
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="company-item">
              <a href="/firmalar/the-fonext" className="card-overlay"></a>
              <div className="company-item-img">
                <img
                  src="/assets/images/companies/logo-3.png"
                  alt="Özgüven Oto Ekspertiz"
                />
              </div>
              <div className="company-item-title">Özgüven Oto Ekspertiz</div>
              <div className="company-item-desc">
                Teknik ekipmanlarla ikinci el araçların kaza/arıza durumlarını
                test detaylı ekspertiz raporları düzenliyoruz.
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="company-item">
              <a href="/firmalar/the-fonext" className="card-overlay"></a>
              <div className="company-item-img">
                <img
                  src="/assets/images/companies/logo-4.png"
                  alt="Aybis Teknoloji"
                />
              </div>
              <div className="company-item-title">Aybis Teknoloji</div>
              <div className="company-item-desc">
                Teknolojinin hızla değiştiği bu dönemde, biz geleceği bugünden
                inşa etmek için buradayız.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Companies
