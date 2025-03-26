import * as S from './styles'

const GameOver = () => (
  <S.Overlay>
    <div className="container">
      <S.Title>Parábens, você completou o jogo!</S.Title>
      <S.Button>Jogue novamente</S.Button>
    </div>
  </S.Overlay>
)

export default GameOver
