/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable-next-line react/no-array-index-key */

import { useState } from 'react';
import COLORS from '../../constant/colors';
import useTimeMachine from '../../hooks/useTimeMachine';
import './TimeMachine.scss';

function TimeMachine() {
  const [currentColorIndex, setCurrentColorIndex] = useState<number | null>(null);
  const [lastValueStored, colorHistory, setColorHistory] = useTimeMachine<number[]>([]);
  const [timeIndex, setTimeIndex] = useState<number>(-1);
  const [isTraveling, setIsTraveling] = useState<boolean>(false);

  const handleColorClick = (index: number) => {
    const lastIndex = lastValueStored && colorHistory[colorHistory.indexOf(lastValueStored)];
    if (index !== lastIndex) {
      setCurrentColorIndex(index);
      setColorHistory([...colorHistory, index]);
      setTimeIndex(colorHistory.length);
    }
  };

  const handleNextClick = () => {
    if (timeIndex < colorHistory.length - 1) {
      const nextIndex = timeIndex + 1;
      setCurrentColorIndex(colorHistory[nextIndex]);
      setTimeIndex(nextIndex);
      setIsTraveling(true);
    }
  };

  const handlePrevClick = () => {
    if (timeIndex > 0) {
      const prevIndex = timeIndex - 1;
      setCurrentColorIndex(colorHistory[prevIndex]);
      setTimeIndex(prevIndex);
      setIsTraveling(true);
    }
  };

  const handleResumeClick = () => {
    if (isTraveling && lastValueStored) {
      setCurrentColorIndex(colorHistory[colorHistory.indexOf(lastValueStored)]);
      setTimeIndex(colorHistory.indexOf(lastValueStored));
      setIsTraveling(false);
    }
  };

  return (
    <div className="timeMachine">
      <div className="timeMachine__container">
        <div className="timeMachine__grid">
          {COLORS.map((color, index) => (
            <div
              role="presentation"
              key={index}
              className="timeMachine__gridItems"
              style={{
                backgroundColor: color,
                opacity: currentColorIndex === index ? 1 : 0.20,
                pointerEvents: isTraveling ? 'none' : 'auto',
              }}
              onClick={() => handleColorClick(index)}
            />
          ))}
        </div>
        <div className="timeMachine__options">
          <button onClick={handleNextClick} disabled={timeIndex === colorHistory.length - 1} type="button">
            Next
          </button>
          <button onClick={handlePrevClick} disabled={timeIndex === -1 || timeIndex === 0} type="button">
            Previous
          </button>
          <button onClick={handleResumeClick} disabled={timeIndex === colorHistory.length - 1} type="button">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
export default TimeMachine;
