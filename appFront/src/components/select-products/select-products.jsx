import {ProductCard} from "../product-card/product-card.jsx";
import './select-products.css'
export const SelectProducts = ( { products } ) => {
    const selectedProducts = () => products.map((product, idx) => {
        {/*console.log(idx)*/}
        return (
            <section className="sel-products" key={idx}>
                <ProductCard
                    product={
                        product
                    }
                    showBtn = { false }
                />
            </section>
        )
    })

    return (
        <section className="sel-products-container">
            {
                selectedProducts()
            }
        </section>
    )
}