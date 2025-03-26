import { Provider } from 'react-redux'
import GameBoard from './components/GameBoard'
import GameOver from './components/GameOver'
import { GlobalStyles } from './styles'
import { store } from './store'

function MemoryGame() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <GameBoard />
      <GameOver />
    </Provider>
  )
}

export default MemoryGame
