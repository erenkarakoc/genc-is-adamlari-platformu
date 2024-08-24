import "./Footer.css"

const Footer: React.FC = () => {
  return (
    <footer id="main-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="footer-logo-wrapper">
              <div className="footer-logo">
                <img
                  src="/assets/logo/logo_long_color_white.svg"
                  alt="Genç İş Adamları Platformu"
                />
              </div>
              <div className="footer-logo-desc">
                Bu platform, genç girişimcilerin bir araya gelerek iş dünyasında
                network kurmasını, deneyimlerini paylaşmasını ve işbirlikleri
                geliştirmesini sağlar. GİAP, genç liderlerin birbirini
                desteklediği ve birlikte güçlenerek geleceğin iş dünyasını
                şekillendirdiği bir topluluk oluşturur.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="footer-nav">
              <ul className="row">
                <li className="col-lg-3">
                  <span>Kurumsal</span>
                  <a href="/">
                    <span>Yönetim Kurulu</span>
                  </a>
                  <a href="/">
                    <span>Komisyonlar</span>
                  </a>
                  <a href="/">
                    <span>Genel Başkan</span>
                  </a>
                  <a href="/">
                    <span>Stratejik Plan</span>
                  </a>
                  <a href="https://arayuz.gencisadamlariplatformu.com">
                    <span>Giriş Yap</span>
                  </a>
                </li>
                <li className="col-lg-3">
                  <span>Faaliyetler</span>
                  <a href="/">
                    <span>Yönetim Kurulu</span>
                  </a>
                  <a href="/">
                    <span>Komisyonlar</span>
                  </a>
                  <a href="/">
                    <span>Genel Başkan</span>
                  </a>
                </li>
                <li className="col-lg-3">
                  <span>Meslekler</span>
                  <a href="/">
                    <span>Yönetim Kurulu</span>
                  </a>
                  <a href="/">
                    <span>Komisyonlar</span>
                  </a>
                </li>
                <li className="col-lg-3">
                  <span>İletişim</span>
                  <a href="/">
                    <span>Hakkımızda</span>
                  </a>
                  <a href="/">
                    <span>Bize Ulaş</span>
                  </a>
                  <a href="mailto:info@gencisadamlariplatformu.com">
                    <span>E-posta gönder</span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ky-external-link"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 0.616438C0 0.275989 0.275989 0 0.616438 0H4.45205C4.7925 0 5.06849 0.275989 5.06849 0.616438C5.06849 0.956888 4.7925 1.23288 4.45205 1.23288H1.23288V8.28767C1.23288 8.41483 1.28339 8.53678 1.3733 8.62669C1.46322 8.71661 1.58517 8.76712 1.71233 8.76712H8.28767C8.41483 8.76712 8.53678 8.71661 8.62669 8.62669C8.71661 8.53678 8.76712 8.41483 8.76712 8.28767V5.54795C8.76712 5.2075 9.04311 4.93151 9.38356 4.93151C9.72401 4.93151 10 5.2075 10 5.54795V8.28767C10 8.74181 9.81959 9.17735 9.49847 9.49847C9.17735 9.81959 8.74181 10 8.28767 10H1.71233C1.25819 10 0.822653 9.81959 0.501529 9.49847C0.180406 9.17735 0 8.74181 0 8.28767V0.616438ZM6.64384 1.23288C6.30339 1.23288 6.0274 0.956888 6.0274 0.616438C6.0274 0.275989 6.30339 0 6.64384 0H9.38356C9.72401 0 10 0.275989 10 0.616438V3.35616C10 3.69661 9.72401 3.9726 9.38356 3.9726C9.04311 3.9726 8.76712 3.69661 8.76712 3.35616V2.10465L3.79205 7.07972C3.55132 7.32046 3.16101 7.32046 2.92028 7.07972C2.67954 6.83899 2.67954 6.44868 2.92028 6.20795L7.89535 1.23288H6.64384Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12">
            <div className="footer-copy">
              2024 &copy; Genç İş Adamları Platformu
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
