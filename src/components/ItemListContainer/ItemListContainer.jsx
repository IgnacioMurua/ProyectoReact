import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/itemList'
import orderProduts from './orderProudcts'


const ItemListContainer = () => {

    const [products, setProducts] = useState ([]) 
    const {categoryName} = useParams()

    useEffect(() => {
        orderProduts()
            .then((res) => {
                setProducts(res) 
            })
    }, [categoryName]);

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
    }



export default ItemListContainer