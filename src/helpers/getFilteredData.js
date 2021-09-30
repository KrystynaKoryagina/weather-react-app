import { getWeekData } from './getWeekData';

export const getFilteredData = (data, filter) => {
    const filteredData = data.filter(({ temperature, type }) => {
        const { type: filterType, min, max } = filter;

        if (min !== null && temperature < min) {
            return false;
        }
        if (max !== null && temperature > max) {
            return false;
        }
        if (filterType && type !== filterType) {
            return false;
        }

        return true;
    });

    return getWeekData(filteredData);
};
