import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import styles from'./ItemListContainer.module.css'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Todos los productos')
    const {categoryName} = useParams()

    const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : `https://fakestoreapi.com/products/`

    useEffect(() => {
        fetch(url)
            .then(res=> res.json())
            .then(json=>{
                setProductos(json)
                categoryName ? setTitulo(categoryName) : setTitulo('Todos los productos')
            })
            .catch(error => console.error(error))
    },[categoryName])

    const toCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }


    return(
        <div>
            <h2>{toCapital(titulo)}</h2>
            <div className={styles.products}>
            
            {productos.length > 0 ? (
                <>
                {productos.map(product => <Item product={product} key={product.id}/>)}  
                </>) : (
                    <span className={styles.loader}></span>
                )}
            </div>
        </div>
    )
}

export default ItemListContainer