import cartIcon from '../../assets/images/shoppingCart.png'
import CartCounter from '../CartCounter/CartCounter'
import './CartWidget.css'


const CartWidget = () => {

    return(
        <div className='cart'>
            <div>
                <img className='cartIcon' src={cartIcon} alt="Shopping cart" />
            </div>
            <CartCounter/>
        </div>
    )
}

export default CartWidget