import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import Footer from './components/footer/Footer'


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Products />
    <Footer />
      
    </>
  )
}


