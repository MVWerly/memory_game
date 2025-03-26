import styled from 'styled-components'
import { colors } from '../../styles'

type OverlayProps = {
  $gameOver: boolean
}

export const Overlay = styled.div<OverlayProps>`
  display: ${(props) => (props.$gameOver ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h2`
  color: ${colors.white};
  font-size: 30px;
  margin-bottom: 50px;
`

export const Button = styled.button`
  cursor: pointer;
  padding: 20px;
  font-size: 20px;
  background-color: ${colors.lightMossGreen};
  border: none;
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
  }
`
