import { useSelectedDay } from '../hooks';
import { getFormatDate } from '../helpers';

export const CurrentDate = () => {
    const { selectedDay } = useSelectedDay();
    const formattedDate = getFormatDate(selectedDay?.day);

    return (
        selectedDay
        && <div className = 'head'>
            <div className = { `icon ${selectedDay?.type}` }>
            </div><div className = 'current-date'>
                <p>{ formattedDate?.day }</p>
                <span>{ formattedDate?.date }</span>
            </div>
        </div>
    );
};
