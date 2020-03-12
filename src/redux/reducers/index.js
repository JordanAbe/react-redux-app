import { combineReducers } from 'redux';
import results from './results';
import suggestions from './suggestions';
import currentItem from './currentItem';

const reducer = combineReducers({
    results,
    suggestions,
    currentItem
})

export default reducer;