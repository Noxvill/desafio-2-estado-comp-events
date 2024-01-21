import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainDiv'>
      <Formulario/>
      </div>
    </>
  )
}

export default App
