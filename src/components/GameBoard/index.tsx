import { useSelector } from 'react-redux'
import Card from '../Card'
import { Board } from './styles'
import { RooReducer } from '../../store'

const BoardGame = () => {
  const { techs } = useSelector((state: RooReducer) => state.memoryGame)

  const duplicatedArray = (array: string[]) => {
    return array.map((tech) => tech).concat(array.map((tech) => tech))
  }

  const duplicatedTechs = duplicatedArray(techs)

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)) as number
      ;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
    }
    return array
  }

  const shuffledTechs = shuffleArray(duplicatedTechs)

  return (
    <>
      <Board className="container">
        {shuffledTechs.map((tech, index) => (
          <>
            <Card techIcon={tech} key={index} />
          </>
        ))}
      </Board>
    </>
  )
}

export default BoardGame
