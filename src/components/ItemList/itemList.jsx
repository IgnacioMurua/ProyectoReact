import Item from '../Item/item'
import styles from './itemList.module.css'



const ItemList = ({products}) => {
    return (
        <div>
            {
                products.length > 0 &&
                products.map((product) => {
                    return (
                        <Item className={styles.itemListContainer} key={product.id} product={product} />
                    )
                })
            }
        </div>
    )
}

export default ItemList