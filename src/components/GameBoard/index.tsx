import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo } from 'react'

import Card from '../Card'

import { RooReducer } from '../../store'
import { start } from '../../store/reducers/memoryGame'

import { Board } from './styles'

const BoardGame = () => {
  const dispatch = useDispatch()
  const { techs, newGame, gameOver } = useSelector(
    (state: RooReducer) => state.memoryGame
  )

  const duplicatedArray = techs
    .map((tech) => tech)
    .concat(techs.map((tech) => tech))

  const shuffleArray = (array: Tech[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)) as number
      ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
    return array
  }

  const shuffledTechs = useMemo(() => shuffleArray(duplicatedArray), [techs])

  useEffect(() => {
    dispatch(start(shuffledTechs))
    if (gameOver) {
      dispatch(start(shuffledTechs))
    }
  }, [dispatch, shuffledTechs, gameOver])

  return (
    <>
      <Board className="container">
        {newGame.map((tech, index) => (
          <Card tech={tech} key={index} />
        ))}
      </Board>
    </>
  )
}

export default BoardGame
