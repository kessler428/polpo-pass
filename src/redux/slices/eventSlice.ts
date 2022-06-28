import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
    eventInfo: [],
    idEvent: {}
}

export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEventInfo: (state, action) => {
            state.eventInfo = action.payload
        },
        viewEvent: (state, action) => {
            state.idEvent = action.payload
        }
    },
})

export const { setEventInfo, viewEvent } = eventsSlice.actions

export default eventsSlice