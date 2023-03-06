export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Delete Todo':
            return initialState.filter(item => action.payload !== item.id);

        case '[TODO] Toggle Todo':
            console.log({ type: action.type, id: action.payload })
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            });

        default:
            return initialState;
    }
}