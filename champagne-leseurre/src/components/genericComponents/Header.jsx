import React, {useState} from "react";
import {Link} from 'react-router-dom'
import logo from "../../assets/logo/champagne_gilles_leseurre_logotype.png"
import Nav from "./Nav";

import '../../sass/components/genericComponents/Header.scss'

function Header () {
    
 const [navVisible, setNavVisible] = useState(false);
 
 function handleClickNav (e) {
    e.preventDefault()
    setNavVisible(!navVisible)
 }

    return (
        <header>
            <Link to="/"><img src={logo} alt="Champagne Gilles Leseurre" /></Link>
            <button className={!navVisible ? ('button_nav') : 'button_nav-open' } onClick={(e) => handleClickNav(e)}></button>
            {navVisible ? (<Nav />) : null}
        </header>
    )
}

export default Header