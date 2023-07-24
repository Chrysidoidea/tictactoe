import React,{useState} from "react";

import Board from "./components/BoardComponent";
import {SquareValue} from "./components/RowComponent.";

import './App.css';

type History = SquareValue[][];

const Game: React.FC = () => {
    const [history, setHistory] = useState<History>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const currentSquares: SquareValue[] = history[currentMove];
    const togglePlayer: boolean = currentMove % 2 === 0;

    const handlePlay = (nextSquares: SquareValue[]) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const jumpTo = (nextMove:number) => {
        setCurrentMove(nextMove);
    };

    const moves = history.map((squares:SquareValue[], move:number) => {
        let description: string;

        if (move > 0) {
            description = `To move: ${move}`
        } else {
            description = `To game start`
        }

        return (
            <li key={move}>
                <button
                    className='history'
                    onClick={() => jumpTo(move)}
                >
                    {description}
                </button>
            </li>
        )
    })


    return (
        <div className="game">
            <div className='game-board'>
                <div className='section'>
                    <Board
                        togglePlayer={togglePlayer}
                        squares={currentSquares}
                        onPlay={handlePlay}
                    />
                </div>
            </div>
            <div className="history-header">History</div>
            <div className='game-info'>
                <ul>{moves}</ul>
            </div>
        </div>
    )
}

export default Game;
