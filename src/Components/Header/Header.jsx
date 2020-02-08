import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

const Header = () => (
    <nav className="navbar">
        <img className="navbar__logo" src="media/logo-without-name.png"></img>

        <ul className="navbar__links">
            <NavLink className="navbar__links__li" exact to="/"><li>HOME</li></NavLink>
            <NavLink className="navbar__links__li" exact to="/events"><li>Events</li></NavLink>
            <NavLink className="navbar__links__li" exact to="/team"><li>Team</li></NavLink>
            <NavLink className="navbar__links__li" exact to="/timeline"><li>timeline</li></NavLink>
            <NavLink className="navbar__links__li" exact to="/brochure"><li>brochure</li></NavLink>
        </ul>

        <button className="navbar__login"><img class="g_img" src="media/google.png" alt=""/></button>
    </nav>
)

export default Header
