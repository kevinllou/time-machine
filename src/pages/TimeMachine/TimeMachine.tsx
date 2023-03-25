import { useState } from 'react';
import Button from '../../components/Button/Button';
import useTimeMachine from '../../hooks/usePrevious';
import './TimeMachine.scss';

function TimeMachine(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [previousValue, getPreviousValue] = useTimeMachine(counter);
  return (
    <section className="timeMachine">
      <div className="timeMachine__container">
        <div className="timeMachine__grid">
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
          <div className="timeMachine__gridItems" />
        </div>
        <div className="timeMachine__options">
          <Button text="Next" />
          <Button text="Resume" />
          <Button text="Previous" />
          {previousValue}
          <br />
          {counter > 1 && getPreviousValue(0)}
          <button onClick={() => setCounter(counter + 1)} type="button"> Change state</button>
        </div>
      </div>
    </section>
  );
}

export default TimeMachine;
