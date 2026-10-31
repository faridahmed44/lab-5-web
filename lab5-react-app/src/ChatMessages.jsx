import ChatMessage from './ChatMessage';

function ChatMessages(props) {
    
   const chatMessages = props.chatMessages;

  const chatMessageComponents = chatMessages.map(chatMessage =>  {
    return <ChatMessage message={chatMessage.message} sender={chatMessage.sender} />;
  });


  return ( //create component
    <>
      {chatMessageComponents}
    </>
  )
}
export default ChatMessages