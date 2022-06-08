import FullCalendar, { EventInput } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const data:EventInput[] = [
    {
        title: "Evento tecnologico",
        start: '2022-05-12'
    },
    {
        title: "Carrera de Moto GP (Francia)",
        start: '2022-05-15'
    },
    {
        title: "Final de la champions",
        start: '2022-05-28'
    }
]

export const Calendar = () =>{
    return(
        <FullCalendar 
            events={data}
            plugins={[dayGridPlugin]}
        />
    )
}