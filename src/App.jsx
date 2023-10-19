import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className='body'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path='/ProyectoEcommerce' element={<ItemListContainer title='NUESTROS PRODUCTOS'/>} />

          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
