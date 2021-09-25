import React, { useState } from 'react'
import "./Navbar.css";
import { setTheme } from '../../services/getTheme';
export default function Navbar(props) {
    const {isToggle , width} = props;
    const [toggle,setToggle] = useState(isToggle);
    const toggleTheme = () => {
        if(!toggle) { 
            setTheme("light-theme");
          }
          else{ 
            setTheme("dark-theme")
          }
          setToggle(!toggle);
          return;
    }
    return (
        <React.Fragment>
        <nav className="navbar">
            <h4 className="navbar__title">CryptoHashApp 🏦 (#Top 100) </h4>
            <a className="navbar__link"  href="https://github.com/Aravindakrishnan"><ion-icon name="logo-github"></ion-icon></a>
        </nav>
        <code onClick={()=>{ toggleTheme() }} className={isToggle ? "navbar__code navbar__toggled" : "navbar__code "}>{ width <= 600 ? toggle ? "dark 🌑" : "light 🌞" : `CTRL + , (Theme Toggle)` }</code>
        </React.Fragment>
    )
}
