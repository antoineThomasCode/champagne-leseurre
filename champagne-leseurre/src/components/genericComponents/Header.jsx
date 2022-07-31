import React from "react";
import {Link} from 'react-router-dom'
import logo from "../../assets/logo/champagne_gilles_leseurre_logotype.png"


import '../../sass/components/genericComponents/Header.scss'

function Header () {

    return (
        <header>
            <Link to="/"><img src={logo} alt="Champagne Gilles Leseurre" /></Link>
        </header>
    )
}

export default Header