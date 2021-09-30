import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from '../lib/redux/selectors';
import { filterActions } from '../lib/redux/actions';

export const useFilter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const setFilter = (value) => {
        dispatch(filterActions.setFilterWeather(value));
    };

    return { filter, setFilter };
};
