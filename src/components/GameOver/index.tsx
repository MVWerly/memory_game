import { useDispatch, useSelector } from 'react-redux'

import { RooReducer } from '../../store'
import { reset } from '../../store/reducers/memoryGame'

import * as S from './styles'

const GameOver = () => {
  const { gameOver } = useSelector((state: RooReducer) => state.memoryGame)
  const dispatch = useDispatch()

  const resetGame = () => {
    dispatch(reset())
  }

  return (
    <S.Overlay $gameOver={gameOver}>
      <div className="container">
        <S.Title>Parábens, você completou o jogo!</S.Title>
        <S.Button onClick={resetGame}>Jogue novamente</S.Button>
      </div>
    </S.Overlay>
  )
}

export default GameOver
