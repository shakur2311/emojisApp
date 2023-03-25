import { useState } from 'react'
import './App.css'
import InputComponent from './Components/InputComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex flex-column align-items-center" style={{paddingTop:300}}>
      <InputComponent/>
    </div>
  )
}

export default App
