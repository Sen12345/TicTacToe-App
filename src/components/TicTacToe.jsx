import { useState, useRef } from "react";
import Board from "./Board.jsx";
import Title from "./Title.jsx";
import cross_icon from "./Assets/X.png";
import circle_icon from "./Assets/O.png";

let data = ["", "", "", "", "", "", "", "", ""];
//The main functional component for the app
function TicTacToe() {
  const [lock, setLock] = useState(false);
  const [count, setCount] = useState(0);
  const [theWinner, setTheWinner] = useState(false);
  // Create the text reference needed to display a congrat message when the player wins
  const titleRef = useRef(null);

  //Create references for each tiles elements that need to be reset back to an empty string after each game
  let box0 = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);

  //the mappable array needed to reference and clear each tile element
  let ref_array = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

  //The event handler method
  const toggle = (e, num) => {
    //Disables the board after someone wins the game
    if (lock) {
      return 0;
    }

    // This statement determines if a tile count is an odd or an even number then makeeach tile element equal to either an X or an O
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" alt="X" /> `;
      setCount(count + 1);
      data[num] = "X";
    } else {
      e.target.innerHTML = `<img src="${circle_icon}" alt="O" /> `;
      setCount(count + 1);
      data[num] = "O";
    }

    if (count === Number(9)) {
      titleRef.current.innerHTML = "Game ends in a draw";
    }
    checkWin();
  };

  //Defines the winning conditions to pass to the win method
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8]) {
      won(data[8]);
    } else if (data[6] === data[4] && data[4] === data[2] && data[2] !== "") {
      won(data[2]);
    }
  };

  // Locks the board after a winner is declared
  const won = (winner) => {
    if (winner) {
      setLock(true);
      setTheWinner(true);
      titleRef.current.innerHTML = `Congratulations ${winner} !!! you have won the game`;
    }
  };

  //Reset the board back to initial state
  const reset = () => {
    setCount(0);
    setLock(false);
    setTheWinner(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = `Tic Tac Toe In <span>React</span>`;
    ref_array.map((ref) => (ref.current.innerHTML = ""));
  };

  return (
    <div className="container">
      <Title titleRef={titleRef} />
      <Board toggle={toggle} ref_array={ref_array} />
      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
