import { useEffect } from 'react';

import { Day } from './Day';

import { useGetWeather, useSelectedDay, useFilter } from '../../hooks';
import { getWeekData, getFilteredData } from '../../helpers';

export const DaysList = () => {
    const { data, isFetchedAfterMount, isSuccess } = useGetWeather();
    const { selectedDay, setSelectedDay } = useSelectedDay();
    const { filter } = useFilter();

    const weekData = filter ? getFilteredData(data, filter) : getWeekData(data);

    const hasData = !!weekData?.length;

    useEffect(() => {
        if (!selectedDay && hasData) {
            setSelectedDay(weekData[ 0 ]);
        }

        if (selectedDay && !hasData) {
            setSelectedDay(null);
        }
    }, [isFetchedAfterMount, weekData]);

    useEffect(() => {
        if (hasData) {
            setSelectedDay(weekData[ 0 ]);
        }
    }, [filter]);

    const selectDay = (day) => setSelectedDay(day);

    const daysJSX = weekData?.map((day) => <Day
        key = { day.id }
        selectDay = { () => selectDay(day) }
        isSelected = { day.id === selectedDay?.id }
        { ...day } />);

    return (
        isSuccess
        && <div className = 'forecast'>
            { hasData
                ? daysJSX
                : <p className = 'message'>{ 'По заданным критериям нет доступных дней' }</p>
            }
        </div>
    );
};
