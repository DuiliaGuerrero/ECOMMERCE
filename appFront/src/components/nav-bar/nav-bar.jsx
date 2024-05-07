import './nav-bar-styles.css'
import {NavLink} from "react-router-dom";
import { ReducerContext } from '../../context/context-provider';
import { useContext, useState} from 'react';
import Cart from '../product-cart/product-cart';

export const NavBar = () => {
    const { state, dispatch } = useContext(ReducerContext);
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart);
    }

    return(
        <header className="main_header">
            <NavLink className={({isActive}) => `nav-item ${ isActive ? 'active': '' }`} >
                { "tienes: " + state.count }
            </NavLink>
            <NavLink className={({isActive}) => `nav-item ${ isActive ? 'active': '' }`} to="/products">
                Home
            </NavLink>
            <NavLink className={({isActive}) => `nav-item ${ isActive ? 'active': '' }`} to="/createProducts">
                Create products
            </NavLink>
            <button onClick={toggleCart}>Mostrar Carrito</button>
            {showCart ? <Cart /> : null}
        </header>
    )
}