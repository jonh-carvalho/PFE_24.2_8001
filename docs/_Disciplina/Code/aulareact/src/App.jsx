import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/Header/MyButton.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem-vindo ao meu aplicativo</h1>
      <MyButton />

    </>
  )
}

export default App
