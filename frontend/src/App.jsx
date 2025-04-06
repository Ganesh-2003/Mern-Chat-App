import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import HomePage from './pages/HomePage.jsx'
import ChatPage from './pages/ChatPage.jsx'

function App() {

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
