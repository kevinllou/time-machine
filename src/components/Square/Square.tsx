interface ISquare {
  value: string | number;
  styleClass : string;
  handleClick: any;
  style: object;
}
function Square({
  value, styleClass, handleClick, style,
}: ISquare) {
  return (
    <button type="button" className={styleClass} onClick={handleClick} style={style}>
      {value}
    </button>
  );
}

export default Square;
