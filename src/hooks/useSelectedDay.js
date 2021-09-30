import { useDispatch, useSelector } from 'react-redux';

import { getSelectedDay } from '../lib/redux/selectors';
import { dayActions } from '../lib/redux/actions';

export const useSelectedDay = () => {
    const selectedDay = useSelector(getSelectedDay);
    const dispatch = useDispatch();

    const setSelectedDay = (day) => {
        dispatch(dayActions.setSelectedDay(day));
    };

    return { selectedDay, setSelectedDay };
};
