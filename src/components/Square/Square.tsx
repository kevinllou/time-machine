interface ISquare {
  value: string;
  styleClass : string;
  handleClick: any;
}
function Square({ value, styleClass, handleClick }: ISquare) {
  return (
    <button type="button" className={styleClass} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
