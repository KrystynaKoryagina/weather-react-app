import { isToday } from 'date-fns';

export const getWeekData = (data) => {
    const todayIndex = data?.findIndex(({ day }) => isToday(day));
    const index = todayIndex > -1 ? todayIndex : 0;

    return data?.slice(index, 7);
};
