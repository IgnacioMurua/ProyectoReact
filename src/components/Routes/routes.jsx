import NavBar from '../navBar/NavBar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../Item/itemDetailContainer'
import NotFound from '../NotFound/notFound'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


const MyRoutes = () => {
    return (
        <div className='body'>

            <BrowserRouter>
                <NavBar />

                <Routes>
                    <Route path='*' element={NotFound}/>
                    <Route exact path='/' element={<ItemListContainer title='NUESTROS PRODUCTOS' />} />
                    <Route exact path='/category/:id' element={<ItemListContainer/>} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default MyRoutes