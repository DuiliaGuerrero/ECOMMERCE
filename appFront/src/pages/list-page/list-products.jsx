import {useEffect, useState} from "react";
import {getProducts} from "../../api/fake-store.js";
import {ProductCard} from "../../components/product-card/product-card.jsx";
import './list-products.css'
import {SelectProducts} from "../../components/select-products/select-products.jsx";
import {CreateArticle} from "../../components/form-product/form-product.jsx";

export const ListProducts = () =>{
    const [products, setProducts] = useState([]);

    const [favProducts, setFavProducts] = useState([]);

    useEffect(() => {
        console.log("Esto se ejecuto una sola vez")
        getProducts().then(products => {
            setProducts(products)
        })
    }, [])

    const renderCards = () => {
        return products.map((product, idx) => {
            {/*console.log(idx)*/}
            return (
                <ProductCard
                    deleteProduct={ deleteProduct }
                    addFavFunc={ favCard }
                    showBtn={ true }
                    key={idx}
                    product={

                            product

                    }
                />
            )
        })
    }

    const favCard = (productFav) =>{
       {/*console.log(productFav)*/}
        setFavProducts([...favProducts, productFav]);

    }

    const btnCreateArticle = (newProduct) =>{
        setProducts([...products, newProduct])
    }
    const deleteProduct = (product) =>{
        const productsNoDelete = products.filter(function(productsArray){
            console.log(product.id)
            return productsArray.id !== product.id
            }
        )
        setProducts(productsNoDelete)
    }


    return(
        <section>
            <article className="sel-cards-section">
                <SelectProducts
                    products={ favProducts}
                />
            </article>
            <article className="form-create-products">
                <CreateArticle
                    buttonCreateArticle = { btnCreateArticle }
                />
            </article>

            <article className="cards-section">
                { renderCards() }
            </article>
        </section>

    )
}

