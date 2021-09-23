import React from 'react'
import "./Navbar.css";
export default function Navbar(props) {
    const {isToggle} = props;
    return (
        <React.Fragment>
        <nav className="navbar">
            <h4 className="navbar__title">CryptoHashApp 🏦 (#Top 100) </h4>
            <a className="navbar__link"  href="https://github.com/Aravindakrishnan"><ion-icon name="logo-github"></ion-icon></a>
        </nav>
        <code className={isToggle ? "navbar__code navbar__toggled" : "navbar__code "}>CTRL + , <span>(Theme Toggle)</span></code>
        </React.Fragment>
    )
}
