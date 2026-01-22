import { RouterProvider } from 'react-router-dom'
import router from './router'
import Navbar from './components/navbar/Navbar'

export default function App() {


  return (
    <>
    
    <RouterProvider router = {router} />
      
    </>
  )
}


