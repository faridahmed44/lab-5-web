import { use, useState } from 'react'
import ChatInput from './ChatInput.jsx'
import ChatMessage from './ChatMessage.jsx'
import ChatMessages from './ChatMessages.jsx'
import './App.css'



function App() {

      const [chatMessages, setChatMessages] = useState([
          { message: "Hello", sender: "User" },
          { message: "Hello, How can I help you?", sender: "Bot" },
          { message: "What is today's date?", sender: "User" },
          { message: "Today's date is october 31 , 2026.", sender: "Bot" }
        ]);

  return (
      <div>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
      <ChatMessages chatMessages={chatMessages} />
      </div>
  ) 
}

export default App
