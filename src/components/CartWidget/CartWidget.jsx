import cartIcon from '../../assets/images/shoppingCart.png'
import CartCounter from '../CartCounter/CartCounter'
import styles from'./CartWidget.module.css'


const CartWidget = () => {

    return(
        <div className='cart'>
            <div>
                <img className={styles.cartIcon} src={cartIcon} alt="Shopping cart" />
            </div>
            <CartCounter/>
        </div>
    )
}

export default CartWidget