import { useState } from "react";
import PropTypes from "prop-types";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}>
              <button onClick={onSelectSquare}>{playerSymbol}</button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
};

GameBoard.propTypes = {
  onSelectSquare: PropTypes.func.isRequired,
  activePlayerSymbol: PropTypes.string.isRequired,
};
export default GameBoard;

