import { createSlice } from '@reduxjs/toolkit'

const initialState: GameMemory = {
  techs: [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
  ],
  lockFirst: false,
  lockSecond: false
}

const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {}
})

export default memorySlice.reducer
