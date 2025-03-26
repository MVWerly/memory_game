import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 136px;
  height: 136px;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 1s;

  & div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.45);
    backface-visibility: hidden;
  }

  &.flip {
    transform: rotateY(180deg);
  }
`

export const CardFront = styled.div`
  background-color: ${colors.deepDarkBlue};
  transform: rotateY(180deg);

  img {
    padding: 20px;
  }
`

export const CardBack = styled.div`
  background-color: ${colors.shadowBlue};
  display: none;

  p {
    font-size: 50px;
    font-weight: bold;
    color: ${colors.deepDarkBlue};
  }
`
