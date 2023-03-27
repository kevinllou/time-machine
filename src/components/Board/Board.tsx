import Square from '../Square/Square';

function Board() {
  return (
    <section className="board">
      <div className="board__container">
        <div className="board__grid">
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
          <Square value="X" styleClass="board__gridItems" />
        </div>
        <div className="board__options">
          <div className="board__optionsButtons">
            <button type="button">Next</button>
            <button type="button">Resume</button>
            <button type="button">Previous</button>

          </div>
          <div className="board__optionsMove">
            <span>Next to move</span>
            <div className="board__squareMove">
              O
            </div>
          </div>
          <button type="button">Replay</button>
        </div>
      </div>
    </section>
  );
}

export default Board;
