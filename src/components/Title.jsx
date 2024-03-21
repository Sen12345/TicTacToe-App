import "./TicTacToe.Module.css";

function Title({ titleRef }) {
  return (
    <h1 className="title" ref={titleRef}>
      Tic Tac Toe In <span>React</span>
    </h1>
  );
}

export default Title;
