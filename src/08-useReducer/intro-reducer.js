

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false
}];

const toDoReducer = (state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = toDoReducer();

const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = toDoReducer(todos, addTodoAction);

console.log({ state: todos })