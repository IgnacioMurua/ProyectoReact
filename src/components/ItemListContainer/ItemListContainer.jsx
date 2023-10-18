import { useEffect, useState } from 'react'
import ItemList from '../ItemList/itemList'
import orderProduts from './orderProudcts'


const ItemListContainer = () => {

    const [products, setProducts] = useState ([]) 

    useEffect(() => {
        orderProduts()
            .then((res) => {
                setProducts(res) 
            })
    }, []);

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
    }



export default ItemListContainer