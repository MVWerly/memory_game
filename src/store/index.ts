import { configureStore } from '@reduxjs/toolkit'
import memoryReducer from './reducers/memoryGame'

export const store = configureStore({
  reducer: {
    memoryGame: memoryReducer
  }
})

export type RooReducer = ReturnType<typeof store.getState>
