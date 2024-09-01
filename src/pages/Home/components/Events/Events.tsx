import "./Events.css"
import { useEffect, useState } from "react"
import Calendar from "./components/Calendar"
import { motion } from "framer-motion"

const Events: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(
    new Date(2024, 9, 10)
  )
  const [events, setEvents] = useState<
    {
      date: Date
      events: {
        time: string
        title: string
        description: string
        location: string
      }[]
    }[]
  >([])

  useEffect(() => {
    setEvents([
      {
        date: new Date(2024, 9, 10),
        events: [
          {
            time: "12:00",
            title: "Genel Kurul Toplantısı",
            description:
              "GİAP Genel Merkezi'nde düzenlenecek olan genel kurul toplantısında önümüzdeki 3 ay içerisinde izlenecek yol haritası ve büyüme stratejileri görüşülecek.",
            location: "GİAP Genel Merkez",
          },
        ],
      },
      {
        date: new Date(2024, 9, 13),
        events: [
          {
            time: "13:00",
            title: "Ankara Ticaret Odası Ziyareti",
            description:
              "Ankara Ticaret Odası'nda yapılacak olan ziyaret sırasında işbirliği ve proje fırsatları değerlendirilecek.",
            location: "Ankara Ticaret Odası",
          },
        ],
      },
    ])
  }, [])

  const selectedEvent =
    events.find(
      (event) =>
        currentDate &&
        event.date.getDate() === currentDate.getDate() &&
        event.date.getMonth() === currentDate.getMonth() &&
        event.date.getFullYear() === currentDate.getFullYear()
    )?.events[0] ?? null

  return (
    <section className="section" id="section-events">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h5 className="event-detail-header">Etkinlik Takvimi</h5>
            <div className="event-detail">
              {selectedEvent ? (
                <>
                  <div className="event-detail-content">
                    <motion.div
                      key={selectedEvent.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}>
                      <h5 className="event-detail-title">
                        {selectedEvent.title}
                      </h5>
                    </motion.div>
                    <motion.div
                      key={`${selectedEvent.title}-desc`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}>
                      <p className="event-detail-description">
                        {selectedEvent.description}
                      </p>
                    </motion.div>
                  </div>
                  <div className="event-detail-info">
                    <motion.div
                      key={`${selectedEvent.time}-time`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}>
                      <div className="event-detail-info-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path
                              d="M216 48v40H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8"
                              opacity=".2"
                            />
                            <path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120m59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45" />
                          </g>
                        </svg>
                        <span>{currentDate?.toLocaleDateString()}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      key={`${selectedEvent.time}-location`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}>
                      <div className="event-detail-info-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path
                                d="M216 136a88 88 0 1 1-88-88a88 88 0 0 1 88 88"
                                opacity=".2"
                              />
                              <path d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80M61.66 37.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 11.32m176 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32M184 128a8 8 0 0 1 0 16h-56a8 8 0 0 1-8-8V80a8 8 0 0 1 16 0v48Z" />
                            </g>
                          </svg>
                        </svg>
                        <span>{selectedEvent.time}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      key={`${selectedEvent.location}-location`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}>
                      <div className="event-detail-info-item">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256">
                            <g fill="currentColor">
                              <path
                                d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                                opacity=".2"
                              />
                              <path d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118" />
                            </g>
                          </svg>
                        </svg>
                        <span>{selectedEvent.location}</span>
                      </div>
                    </motion.div>
                  </div>
                </>
              ) : (
                <div className="spinner-loader py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                      <animateTransform
                        attributeName="transform"
                        dur="0.75s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="0 12 12;360 12 12"
                      />
                    </path>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <Calendar events={events} setCurrentDate={setCurrentDate} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
