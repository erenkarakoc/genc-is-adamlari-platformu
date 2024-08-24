import "./Hero.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

import { motion } from "framer-motion"

const Hero: React.FC = () => {
  return (
    <section className="section" id="section-hero">
      <Swiper
        className="hero-slider"
        modules={[Pagination, EffectFade]}
        effect={"fade"}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide className="hero-slide hero-slide-center">
          {({ isActive }) => (
            <>
              <div className="hero-slide-content">
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="hero-slide-title">
                      Güçlü çevre, büyük başarılar.
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="hero-slide-desc">
                      Genç İş Adamları Platformu, genç girişimcilerin bir araya
                      gelerek daha güçlü ve etkili bir iş ağı kurmasını
                      sağlıyor.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="hero-slide-bg">
                <img
                  src="/assets/images/slider-1.jpg"
                  alt="1"
                  draggable={false}
                />
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          {({ isActive }) => (
            <>
              <div className="hero-slide-content">
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0 }}
                  >
                    <h3 className="hero-slide-title">
                      Türkiye - Etiyopya İş Forumu
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="hero-slide-desc">
                      GİAP Genel Merkezi’nde Türkiye ve Etiyopya’dan genç iş
                      insanları bir araya geldiler. Türk ve Etiyopyalı iş
                      insanları arasında ticari ilişkiler geliştirildi.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="hero-slide-bg">
                <img
                  src="/assets/images/slider-2.jpg"
                  alt="2"
                  draggable={false}
                />
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          {({ isActive }) => (
            <>
              <div className="hero-slide-content">
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0 }}
                  >
                    <h3 className="hero-slide-title">
                      Güçlü çevre, büyük başarılar.
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="hero-slide-desc">
                      Genç İş Adamları Platformu, genç girişimcilerin bir araya
                      gelerek daha güçlü ve etkili bir iş ağı kurmasını
                      sağlıyor.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="hero-slide-bg">
                <img
                  src="/assets/images/slider-1.jpg"
                  alt="1"
                  draggable={false}
                />
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          {({ isActive }) => (
            <>
              <div className="hero-slide-content">
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0 }}
                  >
                    <h3 className="hero-slide-title">
                      Türkiye - Etiyopya İş Forumu
                    </h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : 20,
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="hero-slide-desc">
                      GİAP Genel Merkezi’nde Türkiye ve Etiyopya’dan genç iş
                      insanları bir araya geldiler. Türk ve Etiyopyalı iş
                      insanları arasında ticari ilişkiler geliştirildi.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="hero-slide-bg">
                <img
                  src="/assets/images/slider-2.jpg"
                  alt="2"
                  draggable={false}
                />
              </div>
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Hero
