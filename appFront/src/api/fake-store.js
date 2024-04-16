export const getProducts = async () => {
    const products = await fetch('https://fakestoreapi.com/products')
    return await products.json()
}