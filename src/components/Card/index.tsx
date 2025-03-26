import { useState } from 'react'

import * as S from './styles'

type Props = {
  techIcon: string
}

const Card = ({ techIcon }: Props) => {
  const [cardFlip, setCardFlip] = useState(false)

  const image = `assets/images/${techIcon}.png`

  return (
    <>
      <S.CardContainer
        className={cardFlip ? 'flip' : ''}
        onClick={() => setCardFlip(!cardFlip)}
      >
        <S.CardFront>
          <img src={image} alt={techIcon} />
        </S.CardFront>
        <S.CardBack>
          <p>&lt;/&gt;</p>
        </S.CardBack>
      </S.CardContainer>
    </>
  )
}

export default Card
