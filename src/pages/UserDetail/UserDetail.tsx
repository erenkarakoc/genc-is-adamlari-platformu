/* eslint-disable jsx-a11y/anchor-has-content */
import PageHeader from "../../components/PageHeader/PageHeader"
import "./UserDetail.css"

const UserDetail: React.FC = () => {
  return (
    <div className="page" id="page-companies">
      <PageHeader
        pageTitle="İsmail Yıldırım"
        pageDesc="Günümüz iş dünyasında sürekli değişim ve dönüşüm yaşanırken, FoNext olarak işletmenizin bu süreçte teknolojik gelişmelere uyum sağlamasını, iş süreçlerini iyileştirmesini ve dijitalleşmeyle birlikte büyümesini sağlamak için stratejik destek sunuyoruz."
        breadcrumbs={[
          { title: "Ana Sayfa", path: "/" },
          { title: "Kullanıcılar", path: "/kullanıcılar" },
          { title: "İsmail Yıldırım", path: "/kullanıcı/ismail-yildirim" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/ismail-yildirim-transparent.png" alt="FATİH AKDİK" />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <h3 className="section-title mb-3">
              <span>Hakkında</span>
            </h3>
            <p className="user-detail-about">
              İsmail Yıldırım, mali müşavir olarak finansal alanın en üst düzey
              uzmanlarından biridir. Hem derinlemesine mali bilgisi hem de geniş
              deneyim yelpazesiyle, finansal yönetim ve denetim konularında
              güvenilir bir danışman olarak tanınmaktadır. İş dünyasında uzun
              yıllara dayanan tecrübesiyle, şirketlerin mali yapılarının etkin
              bir şekilde yönetilmesi ve denetlenmesi konusunda önemli
              katkılarda bulunmaktadır.
              <br />
              <br />
              İsmail Yıldırım, mali müşavirlik alanındaki engin bilgi ve
              deneyimini, yazdığı kapsamlı kitaplarla geniş bir kitleyle
              paylaşmıştır. Bu kitaplar, finansal raporlama, denetim teknikleri
              ve mali yönetim konularında sektördeki profesyonellere ve
              öğrencilere rehberlik etmektedir. Yıldırım’ın kitapları, yalnızca
              akademik değil, aynı zamanda pratik bilgiler de sunarak,
              okuyucularının mali süreçleri daha iyi anlamalarına yardımcı
              olmaktadır.
              <br />
              <br />
              Uzmanlık alanındaki başarısını, sadece bilgi ve tecrübeyle değil,
              aynı zamanda yenilikçi düşünme yeteneğiyle de destekleyen İsmail
              Yıldırım, mali raporlama standartları ve denetim süreçlerinde
              sürekli olarak güncel kalmayı başarmaktadır. Bu yaklaşımı, onu
              sektördeki diğer profesyonellerden ayıran önemli bir özellik
              olarak öne çıkmaktadır.
              <br />
              <br />
              İsmail Yıldırım’ın iş dünyasındaki başarısı, onun analitik düşünme
              becerisi, stratejik yaklaşımı ve profesyonel etik anlayışıyla
              desteklenmektedir. Şirketler ve bireyler, onun finansal
              danışmanlık hizmetlerinden yararlanarak, mali yönetimlerini daha
              verimli ve etkili bir şekilde gerçekleştirme fırsatı bulmaktadır.
              Yıldırım’ın sektördeki öncü rolü ve kitapları, finans dünyasında
              önemli bir referans kaynağı olarak değer görmektedir
            </p>
            <h3 className="section-title mb-3">
              <span>Özgeçmiş</span>
            </h3>
            <p className="user-detail-about">
            Gazi Üniversitesini ‘’Ekonometri’’ yüksek lisans/Masterda bölüm
            birincisi olarak mezun olmuştur.SM. Mali Müşavirlik stajı ile yüksek lisansı bir arada yürüten
              İsmail Yıldırım 2019 yılında yüksek bir ortalama ile Türkiye’nin
              en genç mali müşavirlerinden biri olarak SMMM ruhsatını almaya hak
              kazanmıştır.
              <br />
              <br />
              SM. Mali müşavirlik ve şirket üst düzey yönetimleri için finansal
              muhasebe, beyanname hazırlama, vergi ve mali yönetim gibi
              alanlarda yazdığı 7 farklı kitap ve verdiği eğitimler ile 10 bini
              aşkın meslek camiasından kişilere bu yolda ışık tutmuştur.
              <br />
              <br />
              Genç yaşına rağmen başarıları ile göze çarparak sektörde adından
              söz ettiren İsmail Yıldırım Ankara SMMM Odasında 17 bin mali
              müşavirin eğitiminden sorumlu olmak üzere önceki dönem Eğitim
              Komisyon Başkan yr.’ına seçilerek görevi layıkı ile yerine
              getirmiştir.Pek çok dernekte ve platformlarda eğitim başkanlığı ve üstdüzey
              yönetimini yerine getirmiştir.
              <br />
              <br />
              Adliyede bilirkişi ve uzlastırmacı olarak da görev almaktadır.Mesleki bilgi ve tecrübesiyle yüzlerce kurumsal firmaya
              danışmanlık ve müşavirlik hizmeti vermiştir.Sadece meslek camiası kabuğunda kalmak istemeyen Yıldırım tüm
              gençlerin bu konuda atılım yapmasını sağlamak için herkesin
              kabuğunu kırmak üzere ekip arkadaşları ile birlikte GİAP’ı
              kurmuştur.
            </p>
          </div>
        </div>


        <div className="row mt-5">
          <div className="user-detail-contact">
            <h5 className="section-title section-title-light section-title-centered mb-5">
              <span>İsmail Yıldırım ile iletişime geçin.</span>
            </h5>

            <div className="user-detail-contact-items">
              <a
                href="tel:+90 506 052 97 32"
                target="_blank"
                rel="noreferrer"
                className="user-detail-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path
                      d="M223.94 174.08A48.33 48.33 0 0 1 176 216A136 136 0 0 1 40 80a48.33 48.33 0 0 1 41.92-47.94a8 8 0 0 1 8.3 4.8l21.13 47.2a8 8 0 0 1-.66 7.53L89.32 117a7.93 7.93 0 0 0-.54 7.81c8.27 16.93 25.77 34.22 42.75 42.41a7.92 7.92 0 0 0 7.83-.59l25-21.3a8 8 0 0 1 7.59-.69l47.16 21.13a8 8 0 0 1 4.83 8.31"
                      opacity=".2"
                    />
                    <path d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8 8 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.6.6 0 0 0 0 .12l21 47l-20.67 24.74a6 6 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8 8 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" />
                  </g>
                </svg>
                <span>+90 506 052 97 32</span>
              </a>
              <a
                href="mailto:info@thefonext.com"
                target="_blank"
                rel="noreferrer"
                className="user-detail-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path d="m224 56l-96 88l-96-88Z" opacity=".2" />
                    <path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z" />
                  </g>
                </svg>
                <span>ismailyildirim@smmmturkiye.com</span>
              </a>
              <a
                href="https://thefonext.com"
                target="_blank"
                rel="noreferrer"
                className="user-detail-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path
                      d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96"
                      opacity=".2"
                    />
                    <path d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6" />
                  </g>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="user-detail-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="user-detail-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
