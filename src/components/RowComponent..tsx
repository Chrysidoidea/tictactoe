import React from "react";

export type SquareValue = string | null;

type ButtonProps = {
    value: SquareValue;
    onSquareClick: () => void;
    winningCombo: number[] | null;
    draw: boolean | null;
    index: number;

}

export const SquareButton: React.FC<ButtonProps> = ({value, onSquareClick, winningCombo, draw, index}) => {

    const isWinningCombo = winningCombo && winningCombo.includes(index);

        let buttonClassName = "square";

        if (isWinningCombo) {
            buttonClassName = "square winner"
        } else if (draw) {
            buttonClassName = "square draw"
        }

    return (
        <button
            className={buttonClassName}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}