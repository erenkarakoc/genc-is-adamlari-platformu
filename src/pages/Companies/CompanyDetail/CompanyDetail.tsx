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
              <img src="/assets/images/companies/logo-1.png" alt="The Fonext" />
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
              <br />
              Biz, Fonext olarak, dijital stratejilerden operasyonel
              mükemmelliğe, işinize özel yenilikçi çözümler sunuyoruz.
              Sektördeki derin bilgi birikimimiz ve tecrübemizle, dijital çağda
              işlerinizi bir adım öne taşıyor, sürdürülebilir başarı için
              sizlere eşlik ediyoruz.
            </p>
          </div>
        </div>

        <br />
        <br />

        <div className="row row-gap-4 mt-5 justify-content-center">
          <div className="col-12">
            <h5 className="section-title section-title-centered mb-5">
              <span>The Fonext Ekibi</span>
            </h5>
          </div>

          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/10.jpg" alt="FATİH AKDİK" />
              </div>
              <div className="person-card-title">FATİH AKDİK</div>
              <div className="person-card-subtitle">KURUCU ORTAK</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/3.jpg" alt="NURŞAH KARAKAŞ" />
              </div>
              <div className="person-card-title">NURŞAH KARAKAŞ</div>
              <div className="person-card-subtitle">KURUCU ORTAK</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/2.jpg" alt="AYHAN ÇELİK" />
              </div>
              <div className="person-card-title">AYHAN ÇELİK</div>
              <div className="person-card-subtitle">YAZILIMCI</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/1.jpg" alt="DİLAN YAYLA" />
              </div>
              <div className="person-card-title">DİLAN YAYLA</div>
              <div className="person-card-subtitle">SOSYAL MEDYA UZMANI</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/11.jpg" alt="YASİN TÜRK" />
              </div>
              <div className="person-card-title">YASİN TÜRK</div>
              <div className="person-card-subtitle">GRAFİK TASARIMCI</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/4.jpg" alt="ÖMER YILDIRIM" />
              </div>
              <div className="person-card-title">ÖMER YILDIRIM</div>
              <div className="person-card-subtitle">İnsan Kaynakları</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="person-card">
              <div className="person-card-image">
                <img src="/assets/images/people/9.jpg" alt="EREN KARAKOÇ" />
              </div>
              <div className="person-card-title">EREN KARAKOÇ</div>
              <div className="person-card-subtitle">İNSAN KAYNAKLARI</div>
              <footer className="person-card-footer">
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="mailto:mail@ornek.com"
                      target="_blank"
                      rel="noreferrer"
                      title="E-posta gönder">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12 11.05a8 8 0 0 0 10.82 0l12-11.05l58 53.15H52.57ZM157.29 128L216 74.18v107.64Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="X">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <path
                          fill="currentColor"
                          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
                        />
                      </svg>
                    </a>
                  </span>
                </div>
                <div className="person-card-footer-item view-cv">
                  <span>
                    <a
                      href="/kullanicilar/ismail-yildirim"
                      rel="noreferrer"
                      title="Özgeçmiş">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path
                            d="m215.88 56.39l-29.75 169a8 8 0 0 1-9.27 6.49l-130.25-23a8 8 0 0 1-6.49-9.26l29.75-169a8 8 0 0 1 9.27-6.49l130.25 23a8 8 0 0 1 6.49 9.26"
                            opacity=".2"
                          />
                          <path d="m210.78 39.25l-130.25-23A16 16 0 0 0 62 29.23l-29.75 169a16 16 0 0 0 13 18.53l130.25 23a16 16 0 0 0 18.54-13l29.75-169a16 16 0 0 0-13.01-18.51M178.26 224L48 201L77.75 32L208 55ZM89.34 58.42a8 8 0 0 1 9.27-6.48l83 14.65a8 8 0 0 1-1.39 15.88a8.4 8.4 0 0 1-1.4-.12l-83-14.66a8 8 0 0 1-6.48-9.27M83.8 89.94a8 8 0 0 1 9.27-6.49l83 14.66a8 8 0 0 1-1.4 15.89a7.6 7.6 0 0 1-1.41-.13l-83-14.65a8 8 0 0 1-6.46-9.28m-5.55 31.51a8 8 0 0 1 9.27-6.45l41.48 7.29a8 8 0 0 1-1.38 15.88a8.3 8.3 0 0 1-1.4-.12l-41.5-7.33a8 8 0 0 1-6.47-9.27" />
                        </g>
                      </svg>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="company-detail-contact">
            <h5 className="section-title section-title-light section-title-centered mb-5">
              <span>The Fonext ile iletişime geçin.</span>
            </h5>

            <div className="company-detail-contact-items">
              <a
                href="tel:+90 506 052 97 32"
                target="_blank"
                rel="noreferrer"
                className="company-detail-contact-item">
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
                className="company-detail-contact-item">
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
                <span>info@thefonext.com</span>
              </a>
              <a
                href="https://thefonext.com"
                target="_blank"
                rel="noreferrer"
                className="company-detail-contact-item">
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
                <span>thefonext.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyDetail
