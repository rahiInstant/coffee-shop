
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto bg-white'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
