import React, { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFecth = async () => {
        setState({
            ...state,
            isLoading: true,
        })
        try {

            const resp = await fetch(url);
            const data = await resp.json();
            console.log("THE DATA IS => " + data)
            setState({
                data,
                isLoading: false,
                hasError: null
            })
        } catch (error) {
            setState({
                data: [],
                isLoading: false,
                hasError: error
            })
        }
    }

    useEffect(() => {

        getFecth();

    }, [url])




    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
