import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../../src/03-examples/MultipleCustomHooks'
import { useCounter } from '../../../src/hooks/useCounter';
import { useFetch } from '../../../src/hooks/useFetch';

jest.mock('../../../src/hooks/useFetch');
jest.mock('../../../src/hooks/useCounter')
describe('Pruebas en MultipleCustomHooks', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks(); 
    })

    test('Debe regresar el estado inicial', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Breaking bad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        console.log(nextButton.disabled)
        expect(nextButton.disabled).toBeTruthy();

    });

    test('Debe regresar la respuesta de useFetch', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect(nextButton.disabled).toBeFalsy();



    });

    test('Debe de llamar la funcion de incrementear', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null,
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        fireEvent.click(nextButton);
        const increment = jest.fn();
        expect(mockIncrement).toHaveBeenCalled();


    });


})