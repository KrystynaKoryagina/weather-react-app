import { filterTypes } from '../types';

const initialState = {
    selectedFilter: null,
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
    case filterTypes.FILTER_WEATHER: {
        return {
            ...state,
            selectedFilter: action.payload,
        };
    }

    default: {
        return state;
    }
    }
};
