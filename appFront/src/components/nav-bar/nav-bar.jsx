import './nav-bar-styles.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return(
        <header className="main_header">
            <NavLink className={({isActive}) => `nav-item ${ isActive ? 'active': '' }`} to="/products">
                Home
            </NavLink>
            <NavLink className={({isActive}) => `nav-item ${ isActive ? 'active': '' }`} to="/createProducts">
                Create products
            </NavLink>
        </header>
    )
}