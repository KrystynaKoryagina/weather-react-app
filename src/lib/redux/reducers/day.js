
import { dayTypes } from '../types';

const initialState = {
    selectedDay: null,
};

export const dayReducer = (state = initialState, action) => {
    switch (action.type) {
    case dayTypes.SET_SELECTED_DAY: {
        return {
            selectedDay: action.payload,
        };
    }

    default: {
        return state;
    }
    }
};
