import { type as findSuggestions } from '../actions/findSuggestions';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, action) {
    switch (action.type) {
        case findSuggestions:
            console.log(action);
            const regex = new RegExp(`^${action.payload}`, 'i');
            return items.filter(item => regex.test(item.title))
        default:
            return state;
    }
}

export default reducer;