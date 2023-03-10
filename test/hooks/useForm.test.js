import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Ferbnando',
        mail: "fernando@fernando.com"
    }
    test('debe refgresar el objeto por defecto ', () => {

        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            mail: initialForm.mail,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('debe cambiar el nombre del formulario', () => {

        const newValue = "Juan";
        //montar el hook
        //oninput change // act, event...
        //expect result.current.name == newValue
        //expect result.current.formState.name == newValue

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, formState } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: newValue } })
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue)

    });

    test('debe  reiniciar formulario', () => {

        const newValue = "Juan";

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, formState, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: "name", value: newValue } })
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name)

    });
});