import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myboj = {
    name:"aditya",
    age:21
  }
  return (
    <>
      <h1 className='bg-green-500 text-black'>Tailwind test</h1>
       <Card userName="chaiaurcode" btnText="click me"/>
       <Card userName="aditya" />
    </>
  )
}

export default App
