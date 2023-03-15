import React from 'react';
import { useForm } from '../hooks/useForm';

export const SearchBar = ({ search }) => {
    const { textInput, onInputChange, onResetForm } = useForm({
        textInput: ''
    });
    const onSearch = (event) => {
        event.preventDefault();
        if (textInput.trim().length == 0) return;
        search(textInput);
    }
    return (
        <>
            <form onSubmit={(event) => { onSearch(event) }} className="d-flex" role="search">
                <input
                    name='textInput'
                    value={textInput}
                    onChange={onInputChange}
                    className="form-control me-2"
                    type="search"
                    placeholder="Type ID or name"
                    aria-label="Search"
                />
                <input
                    type="submit"
                    className="btn btn-outline-success"
                    value={'Search'}
                />
            </form>

        </>
    )
}
