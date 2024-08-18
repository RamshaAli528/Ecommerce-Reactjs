import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container mx-auto'>
      <Header />
      <Outlet />
        <Footer />
        </div>
    </>
  )
}

export default App
