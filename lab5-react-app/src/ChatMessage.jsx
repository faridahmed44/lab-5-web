import userImg from './download.png'
import botImg from './download (1).png'


function ChatMessage(props) {
    const message = props.message;
    const sender = props.sender;

    if(sender === "User"){
        return(
        <div>
             {message}
            <img src={userImg} width="50" height="50" />
        </div>
        );
    }else{
        return(
        <div>
            <img src={botImg} width="50" height="50" />
             {message}
        </div>
        )
    }

    }

    
export default ChatMessage