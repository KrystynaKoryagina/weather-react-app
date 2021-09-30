import { getFormatDate } from '../../helpers';

export const Day = ({
    type, temperature, day, isSelected, selectDay,
}) => {
    const selected = isSelected ? 'selected' : '';

    return (
        <div className = { `day ${type} ${selected}` } onClick = { selectDay }>
            <p>{ getFormatDate(day)?.day }</p>
            <span>{ temperature }</span>
        </div>
    );
};
