import { type as findResults } from '../actions/findResults';
import items from '../../data/items';

const defaultState = [];

function reducer(state = defaultState, action) {
    switch (action.type) {
        case findResults:
            console.log(action);
            const regex = new RegExp(`^${action.payload}`, 'i');
            return items.filter(item => regex.test(item.title))
        default:
            return state;
    }
}

export default reducer;