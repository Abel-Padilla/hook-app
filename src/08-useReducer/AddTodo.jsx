import React, { useState } from 'react'
import { useForm } from '../hooks'

export const AddTodo = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        onNewTodo(newTodo);
        onResetForm();
    }
    
    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <input
                name="description"
                onChange={onInputChange}
                placeholder='Que hay que hacer?'
                type="text"
                value={description}
                className='form-control'
            />
            <button type='submit' className='btn btn-outline-primary mt-2'>Agregar</button>
        </form>
    )
}
