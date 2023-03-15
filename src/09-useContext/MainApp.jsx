import { UserProvider } from './context/UserProvider'
import { Navigate, Route, Routes, } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { TodoApp } from '../08-useReducer/TodoApp'
import { PokeList } from '../03-examples/PokeList'

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar></Navbar>
            <hr></hr>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="login" element={<LoginPage></LoginPage>} />
                <Route path="about" element={<AboutPage></AboutPage>} />
                <Route path="todoapp" element={<TodoApp></TodoApp>} />
                <Route path="pokeapp" element={<PokeList></PokeList>} />
                <Route path="/*" element={<Navigate to="/about" ></Navigate>} />
            </Routes>
        </UserProvider>

    )
}
