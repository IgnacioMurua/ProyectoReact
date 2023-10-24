import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Home from '../Home/home'
import NotFound from '../NotFound/NotFound'


const MyRoutes = () => {
    return (
        <div>

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/*' element={<NotFound />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/products" element={<ItemListContainer />} />
                    <Route exact path='/category/:categoryName' element={<ItemListContainer />} />
                    <Route exact path='/products/:productId' element={<ItemDetailContainer />} />
                </Routes>


            </BrowserRouter>
        </div>
    )
}

export default MyRoutes