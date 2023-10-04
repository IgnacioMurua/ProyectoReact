import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className='body'>
      <NavBar />
      <ItemListContainer title='NUESTROS PRODUCTOS' />
    </div>
  )
}

export default App
