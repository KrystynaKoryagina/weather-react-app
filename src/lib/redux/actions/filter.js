import { filterTypes } from '../types';

export const filterActions = Object.freeze({
    setFilterWeather: (filter) => {
        return {
            type:    filterTypes.FILTER_WEATHER,
            payload: filter,
        };
    },
});
