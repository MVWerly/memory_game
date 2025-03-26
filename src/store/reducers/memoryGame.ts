import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: GameMemory = {
  techs: [
    {
      name: 'bootstrap',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'css',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'electron',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'firebase',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'html',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'javascript',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'jquery',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'mongo',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'node',
      flipped: false,
      lock: false,
      id: 0
    },
    {
      name: 'react',
      flipped: false,
      lock: false,
      id: 0
    }
  ],
  newGame: [],
  gameOver: false,
  firstCard: '',
  secondCard: ''
}

const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Tech[]>) => {
      state.newGame = action.payload.map((tech, index) => ({
        ...tech,
        id: index + 1
      }))
    },
    flip: (state, action: PayloadAction<Tech>) => {
      const tech = state.newGame.find((tech) => tech.id === action.payload.id)
      if (tech && !tech.flipped) {
        if (!state.firstCard) {
          tech.flipped = true
          state.firstCard = tech.name
        } else if (!state.secondCard) {
          tech.flipped = true
          state.secondCard = tech.name
        }
      }
    },
    match: (state) => {
      if (state.secondCard) {
        if (state.firstCard === state.secondCard) {
          state.newGame.forEach((tech) => {
            if (tech.name === state.firstCard) {
              tech.lock = true
            }
          })
          state.firstCard = ''
          state.secondCard = ''
        }
      }
      if (state.firstCard && state.secondCard) {
        state.newGame.forEach((tech) => {
          if (tech.lock === false) {
            tech.flipped = false
          }
        })
        state.firstCard = ''
        state.secondCard = ''
      }
    },
    gameOver: (state) => {
      const allCardsOpen = state.newGame.every((tech) => tech.lock === true)
      state.gameOver = allCardsOpen
    },
    reset: () => initialState
  }
})

export const { start, flip, match, gameOver, reset } = memorySlice.actions

export default memorySlice.reducer
