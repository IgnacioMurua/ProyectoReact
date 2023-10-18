import products from '../../assets/products/products.js'

const orderProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000)
    })
}

export default orderProducts;
