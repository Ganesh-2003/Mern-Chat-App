import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@chakra-ui/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <br></br>
        <Button colorScheme="blue">Button</Button>
      </div>
    </>
  )
}

export default App
