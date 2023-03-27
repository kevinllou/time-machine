import { useState } from 'react';
import calculateWinner from '../helper/calculateWinner';
import Square from '../Square/Square';

function Board() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [isLetterX, setIsLetterX] = useState(true);
  const winnerPlayer = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    squares[index] = isLetterX ? 'X' : 'O';
    setSquares(squares);
    setIsLetterX(!isLetterX);
  };
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
  };
  return (
    <section className="board">
      <div className="board__container">
        <div className="board__grid">
          <Square value={squares[0]} styleClass="board__gridItems" handleClick={() => handleClick(0)} />
          <Square value={squares[1]} styleClass="board__gridItems" handleClick={() => handleClick(1)} />
          <Square value={squares[2]} styleClass="board__gridItems" handleClick={() => handleClick(2)} />
          <Square value={squares[3]} styleClass="board__gridItems" handleClick={() => handleClick(3)} />
          <Square value={squares[4]} styleClass="board__gridItems" handleClick={() => handleClick(4)} />
          <Square value={squares[5]} styleClass="board__gridItems" handleClick={() => handleClick(5)} />
          <Square value={squares[6]} styleClass="board__gridItems" handleClick={() => handleClick(6)} />
          <Square value={squares[7]} styleClass="board__gridItems" handleClick={() => handleClick(7)} />
          <Square value={squares[8]} styleClass="board__gridItems" handleClick={() => handleClick(8)} />
        </div>
        <div className="board__options">
          <div className="board__optionsButtons">
            <button type="button">Next</button>
            <button type="button">Resume</button>
            <button type="button">Previous</button>

          </div>
          <div className="board__optionsMove">
            <span>{winnerPlayer ? 'Winner' : 'Next to move'}</span>
            <div className="board__squareMove">
              {winnerPlayer ? (
                <p>
                  {winnerPlayer}
                </p>
              ) : (
                <p>
                  {isLetterX ? 'X' : 'O'}
                </p>
              )}

            </div>
          </div>
          <button type="button" onClick={handleRestart}>Restart</button>
        </div>
      </div>
    </section>
  );
}
export default Board;
