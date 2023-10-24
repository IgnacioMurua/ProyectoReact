import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <div>
          <Link to={"/"}><img className="logo" src={logo} alt="" /></Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"}><a class="nav-link" href="#">Home</a></Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul class="dropdown-menu">
              <li><Link to={'/products'} className="dropdown-item">Todos</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={'/category/jewelery'} className="dropdown-item">Joyas</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/category/men's%20clothing"} className="dropdown-item">Ropa de Hombre</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/category/electronics"} className="dropdown-item">Electrónica</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link to={"/category/women's%20clothing"} className="dropdown-item">Ropa de Mujer</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Clientes</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar