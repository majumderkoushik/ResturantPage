import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './assets/Components/NavBar'
import ResCardList from './assets/Components/ResCardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ResCardList />
    </>
  )
}

export default App
