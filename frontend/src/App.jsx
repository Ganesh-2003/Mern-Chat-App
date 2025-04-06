import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import HomePage from './pages/HomePage.jsx'
import ChatPage from './pages/ChatPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />}/>
        </Routes>
      
      </div>

  );
}

export default App
