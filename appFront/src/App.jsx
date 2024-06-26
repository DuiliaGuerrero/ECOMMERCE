import {useEffect, useState} from 'react'
import './App.css'
import {ProductCard} from "./components/product-card/product-card.jsx";
import {NavBar} from "./components/nav-bar/nav-bar.jsx";
import 'normalize.css';
import {getProducts} from "./api/fake-store.js";
import {render} from "react-dom";
import {CreateArticle} from "./components/form-product/form-product.jsx";
import {AppRouter} from "./routes/App.router.jsx";
import { cartListReducer, cartListInitialState } from "./reducers/cart-reducer.jsx"
import { ReducerProvider } from './context/context-provider.jsx';

function App() {
    return (
        <>
            <ReducerProvider reducer={cartListReducer} initialState={cartListInitialState}>
                <NavBar/>
                <main>
                    <AppRouter/>
                </main>
            </ReducerProvider>
        </>
    )
}

export default App
