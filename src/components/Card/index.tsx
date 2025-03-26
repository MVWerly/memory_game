import { useDispatch } from 'react-redux'

import * as S from './styles'
import { flip, gameOver, match } from '../../store/reducers/memoryGame'
import { useEffect } from 'react'

type Props = {
  tech: Tech
}

const Card = ({ tech }: Props) => {
  const dispatch = useDispatch()

  const flipCard = (card: Tech) => {
    dispatch(flip(card))
  }

  useEffect(() => {
    if (tech.flipped) {
      const timer = setTimeout(() => {
        dispatch(match())
        dispatch(gameOver())
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [tech.flipped, dispatch])

  const image = `assets/images/${tech.name}.png`

  return (
    <>
      <S.CardContainer
        className={tech.flipped ? 'flip' : ''}
        onClick={() => flipCard(tech)}
      >
        <S.CardFront>
          <img src={image} alt={tech.name} />
        </S.CardFront>
        <S.CardBack>
          <p>&lt;/&gt;</p>
        </S.CardBack>
      </S.CardContainer>
    </>
  )
}

export default Card
