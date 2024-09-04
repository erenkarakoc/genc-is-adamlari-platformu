/* eslint-disable jsx-a11y/anchor-has-content */
import PageHeader from "../../../components/PageHeader/PageHeader"
import "./OrganizationSchema.css"

const OrganizationSchema: React.FC = () => {
  return (
    <div className="page" id="page-OrganizationSchema">
      <PageHeader
        pageTitle="Organizasyon Yapısı"
        pageDesc="Yönetim Kurulu Yapısı ve Görev Dağılımı"
        breadcrumbs={[
          { title: "Ana Sayfa", path: "/" },
          { title: "Kurumsal", path: "" },
          { title: "Organizasyon Yapısı", path: "/organizasyon-yapisi" },
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="president-wrapper">
            <div className="president-header">
              <div className="president-subtitle">Genel Başkan</div>
              <h4 className="president-title mt-2">İsmail Yıldırım</h4>
              <p className="president-description">
                Genç İş Adamları Platformu'nun kurucusu ve genel başkanıdır.
                Gazi Üniversitesi'nden Ekonomi Yüksek Lisans (Master) programını
                bölüm birincisi olarak tamamlamıştır. SMMM (Sertifikalı Mali
                Müşavir ve Muhasebeci) unvanını, nadir başarılarla elde ettiği
                sınavlar sayesinde kazanmıştır. Yıldırım, yıllardır Ankara'da
                SMMM olarak faaliyet göstermekte ve hem örgün hem de online
                eğitimlerle binlerce müsaviye katkı sağlamıştır. Ayrıca, SMMM
                sınavlarına yönelik olarak 8 kitap yayımlamış ve birçok
                sektördeki yayınevleri ve eğitim kurumlarıyla işbirliği yaparak,
                pek çok SMMM'ye pratik ve etkili eğitimler sunmuştur.
              </p>
            </div>
            <div className="president-image">
              <img
                src="/assets/images/people/ismail-yildirim-transparent.png"
                alt="İsmail Yıldırım"
              />
            </div>
          </div>

          <div className="person-cards-wrapper">
            <h5 className="section-title section-title-centered mb-5">
              <span className="">Yönetim Kurulu Üyeleri</span>
            </h5>

            <div className="row row-gap-4 mb-5 justify-content-center">
              <div className="col-lg-3">
                <div className="person-card">
                  <div className="person-card-image">
                    <img src="/assets/images/people/2.jpg" alt="AYHAN ÇELİK" />
                  </div>
                  <div className="person-card-title">AYHAN ÇELİK</div>
                  <div className="person-card-subtitle">BAŞKAN VEKİLİ</div>
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
                  <div className="person-card-subtitle">Başkan Yardımcısı</div>
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
                  <div className="person-card-subtitle">Başkan Yardımcısı</div>
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
                    <img src="/assets/images/people/10.jpg" alt="FATİH AKDİK" />
                  </div>
                  <div className="person-card-title">FATİH AKDİK</div>
                  <div className="person-card-subtitle">Başkan Yardımcısı</div>
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
                    <img
                      src="/assets/images/people/4.jpg"
                      alt="ÖMER YILDIRIM"
                    />
                  </div>
                  <div className="person-card-title">ÖMER YILDIRIM</div>
                  <div className="person-card-subtitle">Başkan Yardımcısı</div>
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
                    <img
                      src="/assets/images/people/3.jpg"
                      alt="NURŞAH KARAKAŞ"
                    />
                  </div>
                  <div className="person-card-title">NURŞAH KARAKAŞ</div>
                  <div className="person-card-subtitle">BASIN YAYIN</div>
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
                  <div className="person-card-subtitle">BASIN YAYIN</div>
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

            <br />
            <h5 className="section-title section-title-centered mt-5 mb-5">
              <span className="">Disiplin ve Denetleme Kurulu</span>
            </h5>

            <div className="row row-gap-4 mb-5 justify-content-center">
              <div className="col-lg-3">
                <div className="person-card">
                  <div className="person-card-image">
                    <img src="/assets/images/people/10.jpg" alt="MESUT ÜLGER" />
                  </div>
                  <div className="person-card-title">MESUT ÜLGER</div>
                  <div className="person-card-subtitle">BAŞKAN</div>
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
                    <img
                      src="/assets/images/people/11.jpg"
                      alt="BURAK MIZRAK"
                    />
                  </div>
                  <div className="person-card-title">BURAK MIZRAK</div>
                  <div className="person-card-subtitle">Başkan Yardımcısı</div>
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
                    <img src="/assets/images/people/8.jpg" alt="ÖMER ÖZER" />
                  </div>
                  <div className="person-card-title">ÖMER ÖZER</div>
                  <div className="person-card-subtitle">BAŞKAN YARDIMCISI</div>
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
                    <img src="/assets/images/people/1.jpg" alt="ELİF GENÇ" />
                  </div>
                  <div className="person-card-title">ELİF GENÇ</div>
                  <div className="person-card-subtitle">ASİL ÜYE</div>
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
                    <img src="/assets/images/people/3.jpg" alt="EBRU AKTAŞ" />
                  </div>
                  <div className="person-card-title">EBRU AKTAŞ</div>
                  <div className="person-card-subtitle">ASİL ÜYE</div>
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

            <br />
            <h5 className="section-title section-title-centered mt-5 mb-5">
              <span className="">Diğer İl Temsilcileri</span>
            </h5>

            <div className="row row-gap-4 mb-5 justify-content-center">
              <div className="col-lg-3">
                <div className="person-card">
                  <div className="person-card-image">
                    <img
                      src="/assets/images/people/4.jpg"
                      alt="FERHAN KOCADAL"
                    />
                  </div>
                  <div className="person-card-title">FERHAN KOCADAL</div>
                  <div className="person-card-subtitle">İSTANBUL</div>
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
                    <img src="/assets/images/people/2.jpg" alt="FATMA TOLU" />
                  </div>
                  <div className="person-card-title">FATMA TOLU</div>
                  <div className="person-card-subtitle">İZMİR</div>
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
                    <img src="/assets/images/people/8.jpg" alt="CAN YAKAR" />
                  </div>
                  <div className="person-card-title">CAN YAKAR</div>
                  <div className="person-card-subtitle">ANTALYA</div>
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
                    <img src="/assets/images/people/1.jpg" alt="İLAYDA AVCI" />
                  </div>
                  <div className="person-card-title">İLAYDA AVCI</div>
                  <div className="person-card-subtitle">ÇORUM</div>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationSchema
