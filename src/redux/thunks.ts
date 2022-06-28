import { setEventInfo } from "./slices"

import { EventDataProps } from "../interfaces/InterfacesEvents";

// Images for the events

import event from "../images/innovacion.png";
import techEvent from "../images/evento-tech.jpeg"
import eventImage from '../images/EventImage.png'
import virtualEvent from '../images/Virtual-event.jpg'

export const eventsCards: EventDataProps[] = [
    {
        id: '1',
        img: event,
        title: 'Cumbre de innovación de emprendedores',
        direction: 'Por Claro'
    },
    {
        id: '2',
        img: techEvent,
        title: 'Hackaton 4ta edición Nicaraguense',
        direction: 'Holiday Inn'
    },
    {
        id: '3',
        img: eventImage,
        title: 'Pre-Encuentro #1 - Encuentro Vendedores',
        direction: 'Via Zoom'
    },
    {
        id: '4',
        img: virtualEvent,
        title: 'Presentación de proyectos tecnologicos',
        direction: 'Via Zoom'
    },
]

export const getEventsInfo = ( ) =>{
    return (dispatch: any ) => {
        const data = eventsCards
        dispatch( setEventInfo( data ) );
    }
}

