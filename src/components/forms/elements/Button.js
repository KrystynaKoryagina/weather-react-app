export const Button = ({
    type = 'button', value, isDisabled, onClickHandler,
}) => {
    return (
        <button
            type = { type }
            disabled = { isDisabled }
            onClick = { onClickHandler }>
            { value }
        </button>
    );
};
