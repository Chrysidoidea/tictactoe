import {Button} from "./rowComponent.";
import soundFile from "../scribble.mp3"

const Board = ({
                   togglePlayer,
                   squares,
                   onPlay,
               }) => {

    const scribble = new Audio(soundFile);


    const handleClick = (e) => {
        if (!squares[e] && !calculateWinner(squares)) {
            scribble.play();
            const nextSquares = [...squares];
            nextSquares[e] = togglePlayer ? "X" : "O";
            onPlay(nextSquares);
        }
    };

    const calculateWinner = () => {

        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //Row
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //Column
            [0, 4, 8], [2, 4, 6]             //Diagonal
        ];


        for (const line of lines) {
            const [a, b, c] = line;
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return {
                    winner: squares[a],
                    winningCombo: line,
                };
            }
        }

        if (!squares.includes(null)) {
            return {
                winner: null,
                winningCombo: null,
            };
        }

        return null;
    }


    const winner = calculateWinner(squares);
    let stat;

    if (winner && winner.winner !== null) {
        stat = `Player ${winner.winner} wins`;

    } else if (winner && winner.winner === null) {
        stat = "Draw";

    } else {
        stat = "Next Player: " + (togglePlayer ? "X" : "O");
    }

    return (

        <div className="tictactoe">

            <div className='status'>{stat}</div>

            {[0, 3, 6].map((rowStart) => (
                <div
                    className="row"
                    key={rowStart}
                >
                    {
                        [rowStart, rowStart + 1, rowStart + 2].map((index) => (
                            <Button
                                key={index}
                                value={squares[index]}
                                onSquareClick={() => handleClick(index)}
                                winningCombo={winner && winner.winningCombo}
                                draw={winner && winner.winningCombo === null}
                                index={index}
                            />
                        ))
                    }
                </div>
            ))}
        </div>

    )
}

export default Board;
