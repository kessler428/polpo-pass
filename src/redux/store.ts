import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import eventSlice from './slices/eventSlice';

export const store = configureStore({
  reducer: {
    events: eventSlice.reducer
  },
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 