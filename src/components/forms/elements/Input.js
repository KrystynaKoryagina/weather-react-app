export const Input = ({
    type = 'number', label, register, id, onChangeTemperature, isDisabled,
}) => {
    return (
        <p className = 'custom-input'>
            <label htmlFor = { id }>{ label }</label>
            <input
                id = { id }
                type = { type }
                disabled = { isDisabled }
                onClick = { onChangeTemperature }
                { ...register }></input>
        </p>
    );
};
