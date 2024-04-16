import {useEffect, useState} from 'react'
import './App.css'
import {ProductCard} from "./components/product-card/product-card.jsx";
import {NavBar} from "./components/nav-bar/nav-bar.jsx";
import 'normalize.css';
import {getProducts} from "./api/fake-store.js";
import {render} from "react-dom";

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        console.log("Esto se ejecuto una sola vez")
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    const renderCards = () => {
        return products.map((product, idx) => {
            return (
                <ProductCard
                    key={idx}
                    product={
                        {
                            name: product.title.slice(0, 30),
                            description: product.description.slice(0, 100),
                            price: product.price,
                            image: product.image
                        }
                    }
                />
            )
        })
    }

    return (
        <>
            <NavBar/>
            <main>
                <section className="products-section">
                    {
                        renderCards()
                    }
                </section>
            </main>
        </>
    )
}

export default App
