import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage'

//jest.mock('../../src/09-useContext/context/UserContext')

describe('Pruebas en LoginPage', () => {
    const setUserMock = jest.fn();
    test('debe renderizar el componente', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre-tag');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace click en el botón', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const setUserBtn = screen.getByLabelText('set-user');
        fireEvent.click(setUserBtn);
        expect(setUserMock).toHaveBeenCalledWith({ id: '84176168', name: "Juan Abel", mail: "abel.padilla@google.com" })
    });
})