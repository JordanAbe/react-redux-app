const defaultState = [
    {
        id: 1,
        title: 'hello'
    }
];

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'findSuggestions':
            return [
                {
                    id: 1,
                    title: 'react'
                }
            ]
            break;
        default:
            return state;
    }
}

export default reducer;