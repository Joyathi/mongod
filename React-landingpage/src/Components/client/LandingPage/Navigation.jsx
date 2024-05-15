import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function Navigation() {
    return (
        <>
            <nav>
                <div className="navmain">
                    <ul className="items">
                        <li>
                            <button><Link to = {'/about'}>About</Link></button>
                        </li>
                        <li>
                            <button><Link to = {'/login'}>Sign In</Link></button>
                        </li>
                        <li>
                            <button><Link to={'/signin'}>LogIn</Link></button>
                        </li>
                        <li>
                            <button><Link to = {'/support'}>Support</Link></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;