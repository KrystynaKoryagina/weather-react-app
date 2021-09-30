import { useQuery } from 'react-query';

import { api } from '../api';

export const useGetWeather = () => {
    const query = useQuery('forecast', api.getWeather);

    return query;
};
