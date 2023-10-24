import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import  styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [productos, setProductos] = useState([]);

    const url = productId ? `https://fakestoreapi.com/products/${productId}` : `https://fakestoreapi.com/products/`

    useEffect(() => {
        fetch(url)
            .then(res=> res.json())
            .then(json=>{
                setProductos(json)
            })
            .catch(e => console.error(e))
    }, [productId])

    const stock = Math.floor(Math.random().toFixed(2)*100)

    return (
        <>
            <h2 className={styles.dTitle}>{productos.title}</h2>
        <div className={styles.detailContainer}>
            <div className={styles.prodImg}>
                <img src={productos.image} alt="" />
            </div>
            <div className={styles.prodDesc}>
                <p>{productos.description}</p>
                <p>Precio: ${productos.price} USD</p>
                {stock < 10 ?(
                    <div>
                        <p className={styles.stockP}>Stock disponible: {stock}</p>
                        <h3>Ultimas unidades!</h3>
                    </div>
                ) : (
                <p className={styles.stockP}>Stock disponible: {stock}</p>
                )}
                <button className={styles.cardButton}>Añadir al carrito</button>
            </div>
        </div>
        </>
    )
}

export default ItemDetailContainer