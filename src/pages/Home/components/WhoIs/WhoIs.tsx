import "./WhoIs.css"

const WhoIs: React.FC = () => {
  return (
    <>
      <section className="section" id="section-who-is">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <h3 className="section-title">
                <span>GİAP Nedir?</span>
              </h3>
              <p className="section-desc mt-4">
                GİAP, "Genç İş Adamları Platformu"nun kısaltmasıdır. Bu
                platform, genç girişimcilerin bir araya gelerek iş dünyasında
                network kurmasını, deneyimlerini paylaşmasını ve işbirlikleri
                geliştirmesini sağlar. GİAP, genç liderlerin birbirini
                desteklediği ve birlikte güçlenerek geleceğin iş dünyasını
                şekillendirdiği bir topluluk oluşturur.
              </p>
              <button className="gp-button mt-4">Devamını Oku</button>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4">
                  <div className="who-is-counter-item">
                    <span>Şube</span>
                    <span>110+</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="who-is-counter-item">
                    <span>Firma</span>
                    <span>98+</span>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="who-is-counter-item">
                    <span>Üye</span>
                    <span>533+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoIs
