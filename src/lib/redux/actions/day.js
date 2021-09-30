import { dayTypes } from '../types';

export const dayActions = Object.freeze({
    setSelectedDay: (day) => {
        return {
            type:    dayTypes.SET_SELECTED_DAY,
            payload: day,
        };
    },
});
