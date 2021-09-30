import { combineReducers } from 'redux';

import { dayReducer as day, filterReducer as filter } from '../reducers';


export const rootReducer = combineReducers({
    day,
    filter,
});
