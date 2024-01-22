import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'

function App() {
  const [success, setSuccess] = useState(false)


  return (
    <>
    <div className='mainDiv'>
      <Formulario/>
      </div>
    </>
  )
}

export default App
