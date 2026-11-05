'use client'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export default function MyCalendar (props){


    const localizer = momentLocalizer(moment)
    return (<div>
    <Calendar
    localizer={localizer}
//     events={myEventsList}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
    />
    </div>)
}
