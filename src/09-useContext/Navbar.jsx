import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3 ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">UseContext</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse show" id="navbarColor02" >
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                        <NavLink
                            className={
                                ({ isActive }) => {
                                    return (`nav-link ${isActive ? 'active' : ''}`)
                                }
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={
                                ({ isActive }) => {
                                    return (`nav-link ${isActive ? 'active' : ''}`)
                                }
                            }
                            to="about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={
                                ({ isActive }) => {
                                    return (`nav-link ${isActive ? 'active' : ''}`)
                                }
                            }
                            to="login">
                            Login
                        </NavLink>
                    </li>

                </ul>
            </div>
        </div>
    </nav>)
}
