import { NavLink } from "react-router-dom";
import products from "../../assets/products/products";
import Counter from "../Counter/counter"
import styles from './item.module.css'


const ItemDetailContainer = ({ product }) => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.cards}>
                <NavLink to={`/item/${products.id}`}>
                    <h3 className={styles.cardTitle}>{product.title}</h3>
                    <img className={styles.cardImg} src={product.img} alt={product.title} />
                    <p className={styles.cardDesc}>{product.desc}</p>
                </NavLink>
                <p className={styles.cardPrice}>{product.price}</p>
                <Counter />
                <button className={styles.cardButton}>Añadir</button>
            </div>
        </div>
    );
}

export default ItemDetailContainer