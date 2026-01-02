import { useState } from 'react'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FunctionalComponent />
    </>
  )
}

export default App
