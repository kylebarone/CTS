import React from 'react'

export default function Navbar() {
    return (
        <>
            <div>
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
                    <div className="container">
                        <a href="../../index3.html" className="navbar-brand">
                            <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                            <span className="brand-text font-weight-light">Carribean Tax Solutions</span>
                        </a>
                        <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Right navbar links */}
                        <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                            {/* Messages Dropdown Menu */}
                            <li className="nav-item">
                                <a className="nav-link" href="#" role="button">
                                    <i className="fas fa-comments fa-sm" />
                                </a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" role="button">
                                    <span style={{ paddingRight: "3px", }}> <i className="fas fa-lock fa-sm" /></span>
                                    Sign In
                                </a>

                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" href="#">
                                    <i className="flag-icon flag-icon-us" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right p-0">
                                    <a href="#" className="dropdown-item active">
                                        <i className="flag-icon flag-icon-us mr-2" /> English
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <i className="flag-icon flag-icon-nl mr-2" /> Dutch
                                    </a>
                                    <a href="#" className="dropdown-item">
                                        <i className="flag-icon flag-icon-aw mr-2" /> Papimiento
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* /.navbar */}
            </div>

        </>
    )
}
