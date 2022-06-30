import React from 'react'
import {Link} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navbar() {


    const {currentUser} = useAuth();

    return (
        <>
            <nav className='main-header navbar navbar-expand-lg' style={{backgroundColor:"#e3f2fd"}}>
                <div className='container'>
                    <a href="/" className="navbar-brand">
                            <img src="./dist/img/AdminLTElogo.png" alt="CTS Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-bold ml-1">Carribean Tax Solutions</span>
                    </a>
                </div>
                {/* Right navbar links */}
                <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                            {/* Messages Dropdown Menu */}
                            {currentUser && <li className="nav-item">
                                <div className='nav-link'>
                                <Link to="/home">
                                    <i className="fas fa-home fa-sm" />
                                </Link>
                                </div>
                            </li>}
                            <li className="nav-item">
                                <div className='nav-link'>
                                <Link to="/faq">
                                    <i className="fas fa-question fa-sm" />
                                </Link>
                                </div>
                            </li>

                         
                            <li className="nav-item">
                                {!currentUser ? 
                                <div className='nav-link text-nowrap'>
                                <Link to="/login" className='text-decoration-none'>
                                <span className='pr-1'> <i className="fas fa-lock fa-sm" /></span>  Login
                                </Link>
                                </div>
                                : <div className='nav-link'>
                                <Link to="/profile" className='text-decoration-none'>
                                <span className='pr-1'> <i className="fa-solid fa-circle-user fa-lg"></i></span> 
                                </Link>
                                </div>}
                            </li>
                            
                        </ul>
            </nav>
        </>
    )
}
