import { createStore } from 'redux';
import reducer from './reducers/index';

const globalState = localStorage.getItem('GLOBAL_STATE');
const initialState = globalState ? JSON.parse(globalState) : undefined;
const store = createStore(reducer, initialState);

export const saveState = ()=> {
    const state = store.getState();
    localStorage.setItem('GLOBAL_STATE', JSON.stringify(state));
}

export default store;