import Square from './Square';
import styles from "../pages/css/ChessBoard.module.css"

const ChessBoard = () => {
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const black = (i + j) % 2 === 1;
        squares.push(<Square key={`${i}-${j}`} black={black} />);
      }
    }
    return squares;
  };

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>{renderSquares()}</div>
    </div>
  );
};

export default ChessBoard;
