import { useState } from "react";

function ChatInput(props){

   const chatMessages = props.chatMessages;
   const setChatMessages = props.setChatMessages;

   const [input, setInput] = useState("");

   function saveInputText(event){
    setInput(event.target.value);
   }

  function addMessage(){

    // chatMessages.push({ message: "New message", sender: "User" });
    setChatMessages([...chatMessages, { message:input, sender: "User" }]);

    console.log("Message sent");
  }



  return (
    <div>
      <input type="text" placeholder="Send a message to ChatBot" size="30" onChange={saveInputText}
  value={input}/>
      <button onClick={addMessage}>Send</button>
    </div>)
}

export default ChatInput