import styles from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return(
        <div className={styles.cards}>
            <img className={styles.cardImg} src={product.image} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <p>Precio: USD ${product.price}</p>
                <p>Categoria: {product.category}</p>
                <Link className={styles.verMas} to={`/products/${product.id}`}>Ver Más</Link>
            </div>
        </div>
    )
}

export default Item