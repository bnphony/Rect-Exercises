import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras
  // para ver si X u O gano
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // No hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  /* Revisamos si hay un empate,
  si no hay mas espacios vacios en el tablero */
  return newBoard.every((square) => square !== null)
}
