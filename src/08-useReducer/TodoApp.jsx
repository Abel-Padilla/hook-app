/*
El uso de reducer puede ser una alternativa para useState
*/

import React from 'react';
import { useTodos } from '../hooks';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1>To Do App ({todosCount}), pendientes : <small>{pendingTodosCount}</small></h1>
            <hr></hr>

            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        handleDeleteTodo={handleDeleteTodo}
                        todoList={todos}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <AddTodo onNewTodo={handleNewTodo}></AddTodo>
                </div>

            </div>

        </>
    )
}
