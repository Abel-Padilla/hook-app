import React, { useReducer } from 'react'
import { TodoItem } from './TodoItem'
import { todoReducer } from './toDoReducer'

export const TodoList = ({ todoList, handleDeleteTodo, onToggleTodo }) => {
    if (!todoList || todoList.length == 0) return <>No Data</>
    return (
        <ul className='list-group'>
            {
                todoList.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleDeleteTodo={handleDeleteTodo}
                            onToggleTodo={onToggleTodo}
                        ></TodoItem>
                    )
                })
            }

        </ul>
    )
}
