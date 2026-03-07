import { useState } from 'react'
import './App.css'
import Header from './Comp/Header'
import Main_page from './Comp/Main_page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main_page/>
    </>
  )
}

export default App
