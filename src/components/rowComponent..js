export const Button = ({value, onSquareClick, winningCombo, draw, index}) => {

    const isWinningCombo = winningCombo && winningCombo.includes(index);
    const buttonClassName = isWinningCombo ? "square winner": draw ? "square draw": "square";

    return (
        <button
            className={buttonClassName}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}