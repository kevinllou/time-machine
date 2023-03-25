import Button from '../../components/Button/Button';
import './TimeMachine.scss';

function TimeMachine() {
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
        </div>
      </div>
    </section>
  );
}

export default TimeMachine;
