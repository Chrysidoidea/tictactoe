export const Button = ({value, onSquareClick, winningCombo, index}) => {

    const isWinningCombo = winningCombo && winningCombo.includes(index);
    const buttonClassName = isWinningCombo && isWinningCombo ? "square winner" : "square";

    return (
        <button
            className={buttonClassName}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}