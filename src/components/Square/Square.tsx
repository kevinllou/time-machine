interface ISquare {
  value: string;
}
function Square({ value }: ISquare) {
  return (
    <button type="button">
      {value}
    </button>
  );
}

export default Square;
