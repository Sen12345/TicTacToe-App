import "./TicTacToe.Module.css";
const mystyle = {
  color: "red",
  fontSize: 36,
};

function Board({ toggle, ref_array }) {
  return (
    <div className="board">
      <div className="row1">
        <div
          className="box"
          ref={ref_array[0]}
          onClick={(e) => toggle(e, 0)}
        ></div>
        <div
          className="box"
          ref={ref_array[1]}
          onClick={(e) => toggle(e, 1)}
        ></div>
        <div
          className="box"
          ref={ref_array[2]}
          onClick={(e) => toggle(e, 2)}
        ></div>
      </div>
      <div className="row2">
        <div
          className="box"
          ref={ref_array[3]}
          onClick={(e) => toggle(e, 3)}
        ></div>
        <div
          className="box"
          ref={ref_array[4]}
          onClick={(e) => toggle(e, 4)}
        ></div>
        <div
          className="box"
          ref={ref_array[5]}
          onClick={(e) => toggle(e, 5)}
        ></div>
      </div>
      <div className="row3">
        <div
          className="box"
          ref={ref_array[6]}
          onClick={(e) => toggle(e, 6)}
        ></div>
        <div
          className="box"
          ref={ref_array[7]}
          onClick={(e) => toggle(e, 7)}
        ></div>
        <div
          className="box"
          ref={ref_array[8]}
          onClick={(e) => toggle(e, 8)}
        ></div>
      </div>
    </div>
  );
}

export default Board;
