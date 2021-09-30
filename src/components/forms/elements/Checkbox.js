export const Checkbox = ({
    label, register, type, setValue, isSelected, filter,
}) => {
    const selected = isSelected ? 'selected' : '';
    const blocked = filter ? 'blocked' : '';

    return (
        <span
            className = { `checkbox ${selected} ${blocked}` }
            onClick = { () => !filter && setValue('type', type, { shouldDirty: true }) }
            { ...register }>{ label }</span>
    );
};
