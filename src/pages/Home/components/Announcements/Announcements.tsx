/* eslint-disable jsx-a11y/anchor-has-content */
import "./Announcements.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { motion } from "framer-motion"
import { convertISOToTurkishDate } from "./../../../../helpers/helper"

const Announcements: React.FC = () => {
  return (
    <>
      <section className="section" id="section-announcements">
        <div className="container">
          <h3 className="section-title section-title-light mb-5">
            <span>Duyurular</span>
          </h3>

          <Swiper
            className="announcements-slider"
            modules={[Pagination, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="announcement-item">
                  <a href="/" className="card-overlay"></a>
                  <div className="announcement-img">
                    <img
                      src="/assets/images/announcements/announcement-1.jpg"
                      alt="EXPO 2022'DE HEDEF 5 MİLYAR DOLARLIK TİCARET BAĞLANTISI"
                    />
                  </div>
                  <div className="announcement-title">
                    Expo 2022'de Hedef 5 Milyar Dolarlık Ticaret Bağlantısı
                  </div>
                  <div className="announcement-date">
                    {convertISOToTurkishDate("11/04/2024")}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="announcement-item">
                  <a href="/" className="card-overlay"></a>
                  <div className="announcement-img">
                    <img
                      src="/assets/images/announcements/announcement-1.jpg"
                      alt="EXPO 2022'DE HEDEF 5 MİLYAR DOLARLIK TİCARET BAĞLANTISI"
                    />
                  </div>
                  <div className="announcement-title">
                    Expo 2022'de Hedef 5 Milyar Dolarlık Ticaret Bağlantısı
                  </div>
                  <div className="announcement-date">
                    {convertISOToTurkishDate("11/04/2024")}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="announcement-item">
                  <a href="/" className="card-overlay"></a>
                  <div className="announcement-img">
                    <img
                      src="/assets/images/announcements/announcement-1.jpg"
                      alt="EXPO 2022'DE HEDEF 5 MİLYAR DOLARLIK TİCARET BAĞLANTISI"
                    />
                  </div>
                  <div className="announcement-title">
                    Expo 2022'de Hedef 5 Milyar Dolarlık Ticaret Bağlantısı
                  </div>
                  <div className="announcement-date">
                    {convertISOToTurkishDate("11/04/2024")}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="announcement-item">
                  <a href="/" className="card-overlay"></a>
                  <div className="announcement-img">
                    <img
                      src="/assets/images/announcements/announcement-1.jpg"
                      alt="EXPO 2022'DE HEDEF 5 MİLYAR DOLARLIK TİCARET BAĞLANTISI"
                    />
                  </div>
                  <div className="announcement-title">
                    Expo 2022'de Hedef 5 Milyar Dolarlık Ticaret Bağlantısı
                  </div>
                  <div className="announcement-date">
                    {convertISOToTurkishDate("11/04/2024")}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Announcements
