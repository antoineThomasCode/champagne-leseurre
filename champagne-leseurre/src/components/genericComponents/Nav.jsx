import React from "react";
import {Link} from 'react-router-dom'
import '../../sass/components/genericComponents/Nav.scss'

function Nav () {
    
    return (
        <nav>
            <div className="navContainer">
                <Link to='/'>Nos cuvées</Link>
                <Link to='/'>Notre histoire</Link>
                <Link to='/'>Visiter nos caves</Link>
                <Link to='/'>Vivre l'expérience</Link>
            </div>
        </nav>
    )
}
export default Nav