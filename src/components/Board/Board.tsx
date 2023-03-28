/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import useTimeMachine from '../../hooks/useTimeMachine';
import calculateWinner from '../helper/calculateWinner';
import Square from '../Square/Square';

function Board() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));
  const [isLetterX, setIsLetterX] = useState(true);
  const [currentSquare, setCurrentSquare] = useState<number | null>(null);
  const {
    history,
    timeIndex,
    isTraveling,
    updateHistory,
    updateIndex,
    updateIsTraveling,
  } = useTimeMachine<number[]>([]);
  const winnerPlayer = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (winnerPlayer || squares[index] || isTraveling) {
      return;
    }
    setCurrentSquare(index);
    updateHistory([...history, index]);
    updateIndex(history.length);
    squares[index] = isLetterX ? 'X' : 'O';
    setSquares(squares);
    setIsLetterX(!isLetterX);
  };
  const handlePrevious = () => {
    if (timeIndex > 0) {
      const prevIndex = timeIndex - 1;
      setCurrentSquare(history[prevIndex]);
      updateIndex(prevIndex);
      updateIsTraveling(true);
    }
  };
  const handleNextClick = () => {
    if (timeIndex < history.length - 1) {
      const nextIndex = timeIndex + 1;
      setCurrentSquare(history[nextIndex]);
      updateIndex(nextIndex);
      updateIsTraveling(nextIndex !== history.length - 1);
    }
  };
  const handleReplay = () => {
    let index = history.length - 1;
    const interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval);
        return;
      }
      setCurrentSquare(history[index]);
      // eslint-disable-next-line no-plusplus
      index--;
    }, 500);
  };
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setCurrentSquare(null);
    updateHistory([]);
    updateIndex(-1);
    setIsLetterX(true);
  };
  return (
    <section className="board">
      <div className="board__container">
        <div className="board__grid">
          {squares.map((square, index) => (
            <Square
              key={index}
              value={square}
              style={{
                backgroundColor: currentSquare === index ? '#777777' : '',
                color: currentSquare === index ? 'white' : '',
                pointerEvents: isTraveling || winnerPlayer ? 'none' : 'auto',
              }}
              styleClass="board__gridItems"
              handleClick={() => handleClick(index)}
            />
          ))}
        </div>
        <div className="board__options">
          <div className="board__optionsButtons">
            <button type="button" onClick={handleNextClick} disabled={timeIndex === history.length - 1}>Next</button>
            <button type="button" onClick={handleReplay}>Replay</button>
            <button type="button" onClick={handlePrevious} disabled={timeIndex === -1 || timeIndex === 0}>Previous</button>

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
