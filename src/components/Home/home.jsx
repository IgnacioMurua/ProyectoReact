import { Link } from 'react-router-dom'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        <h1>Bienvenido a la tienda online de Technocom</h1>
        <Link to={'/products'} className={styles.bHome}>Entrar</Link>
    </div>
  )
}

export default Home