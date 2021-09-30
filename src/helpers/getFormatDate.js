import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const getFormatDate = (date) => {
    if (!date) {
        return null;
    }

    const currentDate = new Date(date);

    return {
        date: format(currentDate, 'd MMMM', { locale: ru }),
        day:  format(currentDate, 'EEEE', { locale: ru }),
    };
};
