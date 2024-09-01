import { useEffect, useState } from "react"
import {
  CustomProvider,
  Container,
  Calendar as RSuiteCalendar,
  Badge,
} from "rsuite"
import "rsuite/dist/rsuite.min.css"

type Event = {
  date: Date
  events: { time: string; title: string; description: string }[]
}

type Props = {
  events: Event[]
  setCurrentDate: (date: Date) => void
}

const Calendar: React.FC<Props> = ({ events, setCurrentDate }) => {
  const [nearestEventDate, setNearestEventDate] = useState<Date | null>(null)

  const getTodoList = (date: Date) => {
    const eventForDate = events.find(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    )

    return eventForDate ? eventForDate.events : []
  }

  const renderCell = (date: Date) => {
    const list = getTodoList(date)

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />
    } else {
      return ""
    }
  }

  useEffect(() => {
    function getNearestEventDate(events: Event[]): Date | null {
      const today = new Date()
      const upcomingEvents = events.filter((event) => event.date >= today)

      if (upcomingEvents.length === 0) {
        return null
      }

      upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime())

      return upcomingEvents[0].date
    }
    const nearestDate = getNearestEventDate(events)
    setNearestEventDate(nearestDate)
    console.log(nearestEventDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events])

  const handleDateChange = (date: Date) => {
    const list = getTodoList(date)
    if (list.length > 0) setCurrentDate(date)
  }

  return (
    <div style={{ width: 280 }}>
      <CustomProvider theme="light">
        <Container>
          <RSuiteCalendar
            compact
            bordered
            renderCell={renderCell}
            onChange={handleDateChange}
            defaultValue={new Date(2024, 9, 10)}
          />
        </Container>
      </CustomProvider>
    </div>
  )
}

export default Calendar
