import React from "react"
import "./Hero.css"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Hero: React.FC = () => {
  return (
    <section className="section" id="section-hero">
      <Swiper
        className="hero-slider"
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide className="hero-slide hero-slide-center">
          <div className="hero-slide-content">
            <div className="container">
              <h3 className="hero-slide-title">
                Güçlü çevre, büyük başarılar.
              </h3>
              <p className="hero-slide-desc">
                Genç İş Adamları Platformu, genç girişimcilerin bir araya
                gelerek daha güçlü ve etkili bir iş ağı kurmasını sağlıyor.
              </p>
            </div>
          </div>
          <div className="hero-slide-bg">
            <img src="/assets/images/slider-1.jpg" alt="1" draggable={false} />
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <div className="hero-slide-content">
            <div className="container">
              <h3 className="hero-slide-title">Türkiye - Etiyopya İş Forumu</h3>
              <p className="hero-slide-desc">
                GİAP Genel Merkezi’nde Türkiye ve Etiyopya’dan genç iş insanları
                bir araya geldiler. Türk ve Etiyopyalı iş insanları arasında
                ticari ilişkiler geliştirildi.
              </p>
            </div>
          </div>
          <div className="hero-slide-bg">
            <img src="/assets/images/slider-2.jpg" alt="2" draggable={false} />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
