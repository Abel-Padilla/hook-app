import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer/toDoReducer";
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        return () => {

        }
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch(action)
    }
    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        };
        dispatch(action)
    }
    const handleToggleTodo = (id) => {
        console.log('toggle => ' + id)
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };
        dispatch(action)
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}