import { UserProvider } from './context/UserProvider'
import { Navigate, Route, Routes, } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar></Navbar>
            <hr></hr>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>} />
                <Route path="login" element={<LoginPage></LoginPage>} />
                <Route path="about" element={<AboutPage></AboutPage>} />
                <Route path="/*" element={<Navigate to="/about" ></Navigate>} />
            </Routes>
        </UserProvider>

    )
}
