export const Square = ({ children, isSelected, updateBoard, index }) => {
  const classTurnName = `square ${isSelected ? 'is-selected': ''}`
  
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={classTurnName}>
      {children}
    </div>
  )
}