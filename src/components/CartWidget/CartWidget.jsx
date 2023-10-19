import cartIcon from '../../assets/images/shoppingCart.png'
import CartCounter from '../CartCounter/CartCounter'
import styles from'./CartWidget.module.css'


const CartWidget = () => {

    return(
        <div className={styles.cart}>
                <img className={styles.cartIcon} src={cartIcon} alt="Shopping cart" />
            <CartCounter/>
        </div>
    )
}

export default CartWidget