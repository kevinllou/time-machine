interface ISquare {
  value: string;
  styleClass : string;
}
function Square({ value, styleClass }: ISquare) {
  return (
    <button type="button" className={styleClass}>
      {value}
    </button>
  );
}

export default Square;
