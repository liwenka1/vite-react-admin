import { useState } from 'react'
import CompOne from './components/CompOne'
import CompTwo from './components/CompTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      top
      <CompOne></CompOne>
      <CompTwo></CompTwo>
    </div>
  )
}

export default App
