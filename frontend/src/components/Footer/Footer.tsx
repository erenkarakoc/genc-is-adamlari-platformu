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
                  <a href="/organizasyon-yapisi">
                    <span>Organizasyon Yapısı</span>
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
                      className="ky-external-link">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0.616438C0 0.275989 0.275989 0 0.616438 0H4.45205C4.7925 0 5.06849 0.275989 5.06849 0.616438C5.06849 0.956888 4.7925 1.23288 4.45205 1.23288H1.23288V8.28767C1.23288 8.41483 1.28339 8.53678 1.3733 8.62669C1.46322 8.71661 1.58517 8.76712 1.71233 8.76712H8.28767C8.41483 8.76712 8.53678 8.71661 8.62669 8.62669C8.71661 8.53678 8.76712 8.41483 8.76712 8.28767V5.54795C8.76712 5.2075 9.04311 4.93151 9.38356 4.93151C9.72401 4.93151 10 5.2075 10 5.54795V8.28767C10 8.74181 9.81959 9.17735 9.49847 9.49847C9.17735 9.81959 8.74181 10 8.28767 10H1.71233C1.25819 10 0.822653 9.81959 0.501529 9.49847C0.180406 9.17735 0 8.74181 0 8.28767V0.616438ZM6.64384 1.23288C6.30339 1.23288 6.0274 0.956888 6.0274 0.616438C6.0274 0.275989 6.30339 0 6.64384 0H9.38356C9.72401 0 10 0.275989 10 0.616438V3.35616C10 3.69661 9.72401 3.9726 9.38356 3.9726C9.04311 3.9726 8.76712 3.69661 8.76712 3.35616V2.10465L3.79205 7.07972C3.55132 7.32046 3.16101 7.32046 2.92028 7.07972C2.67954 6.83899 2.67954 6.44868 2.92028 6.20795L7.89535 1.23288H6.64384Z"
                        fill="currentColor"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-12">
            <div className="footer-social-media">
                    <a title="Facebook" href="https://l24.im/0ajmXY" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" fill="currentColor"/></svg></a>
                    <a title="Twitter" href="https://x.com/GIAP_Resmi" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 448 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"/></svg></a>
                    <a title="Instagram" href="https://www.instagram.com/giapturkiye/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg></a>
                    <a title="YouTube" href="https://l24.im/RXrCGsa" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H6a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zM9 9v6a1 1 0 0 0 1.514.857l5-3a1 1 0 0 0 0-1.714l-5-3A1 1 0 0 0 9 9"/></svg></a>
                    <a title="Linkedin" href="https://l24.im/HTP5By1" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg></a>
            </div>
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
