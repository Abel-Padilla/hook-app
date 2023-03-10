import { todoReducer } from '../../../src/08-useReducer/toDoReducer'

describe('Pruebas en useReducer', () => {

    const initialState = [
        {
            id: 1,
            descrption: 'Demo Todo',
            done: false
        },
        {
            id: 2,
            description: 'Nuevo todo #2',
            done: false
        }
    ]

    test('Debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);



    });

    test('Debe de agregar un todo', () => {
        const action = {
            type: "[TODO] Add Todo",
            payload: {
                id: 3,
                description: 'Nuevo todo #3',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(3);
        expect(newState).toContain(action.payload)

    });


    test('Debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: 2
        }
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(1);

    });

    test('Debe realizar el toggle de un todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 2
        }
        const newState = todoReducer(initialState, action);
        console.log(newState)
        expect(newState[1].done).toBe(true);

    });


})