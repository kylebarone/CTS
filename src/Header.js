import React, { Component } from 'react'
//import './Header.css';

export default class Header extends Component {
  render() {
    return (
<div>
  <nav className="navbar navbar-expand-md navbar-dark navbar-black">
    <div className="container">
      <a href="../../index3.html" className="navbar-brand">
        <span className="brand-text font-weight-light">Carribean Tax Solutions</span>
      </a>
      <div className="collapse navbar-collapse order-3" id="navbarCollapse">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="index3.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
      {/* Right navbar links */}
      <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
        <li className="nav-item">
          <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
            <i className="fas fa-th-large" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>

    )
  }
}
