import { type as findCurrentItem } from '../actions/findCurrentItem';
import items from '../../data/items';

const defaultState = {};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case findCurrentItem:
            return items.find(item => action.payload === item.id)
        default:
            return state;
    }
}

export default reducer;