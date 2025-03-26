declare type Tech = {
  name: string
  flipped: boolean
  lock: boolean
  id: number
}

declare type GameMemory = {
  techs: Tech[]
  newGame: Tech[]
  gameOver: boolean
  firstCard: string
  secondCard: string
}
