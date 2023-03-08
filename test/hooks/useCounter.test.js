import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'
describe('Pruebas en el useCounter', () => {
    test('Debe retornar los valores por defecto ', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
    });

    test('Debe generar el valor de counter en 100', () => {
        const initialValue = 100;
        const { result } = renderHook(() => useCounter(initialValue));
        const { counter } = result.current;
        expect(counter).toBe(initialValue);
    });

    test('Debe incrementar el valor de counter ', () => {

        const { result } = renderHook(() => useCounter(100));
        const { counter, increment } = result.current;
        increment();
        act(() => {
            increment();
            increment(2)
        });
        expect(result.current.counter).toBe(103);
    });

})