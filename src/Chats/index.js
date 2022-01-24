 import Button from '@material-ui/core/Button';
 import { useState, useEffect } from 'react';
 import {Typography, TextField, Container} from '@material-ui/core/';
 import { nanoid } from 'nanoid';

function Chats() {

  let chatId = nanoid();

    const [chatName, setChatName] = useState('');
    const [chatArray, setChatArray] = useState([]);

    const onAddChat = () => {
        if (chatName !=='') {  
            setChatArray(prev => [...prev, 
              {
              chatNname: chatName,
              id: chatId,
              }]);
              setChatName(''); 
    }
  };
  
  useEffect(() => {
    if (chatName.length > 0) {
       
     setChatName('');
    }
  }, [chatArray]);
    
    /*const deleteChat = () => {
      if (chatArray[chatArray.id] === chatId){
      delete chatArray[chatArray.id].chatNname}
      console.log(chatArray[chatArray.id].chatNname);
    }*/
    
    return (
        <>
        <h2>Chats</h2>
        <div className = "inputChatName">
        <TextField autoFocus className='inputBlock' variant="outlined"  id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={2}
         value = {chatName}
          onChange={(e) => setChatName(e.target.value)}
          onKeyDown={({key}) => {
            if (key === 'Enter' || key.code === 13){
            onAddChat()}
          }}></TextField>
       <Button onClick={onAddChat} variant="contained" color="primary" className="chat_btn">Добавить чат</Button>
       </div>
       <Container className="MessageList">
         <div className="chatString">
        {
          chatArray.map((message, i) => (<Typography variant="h6" key={i}>{message.chatNname}</Typography>))
        }
        <Button /*onClick={deleteChat}*/ variant="contained" color="secondary">Удалить чат</Button>
        </div>
        </Container>
       </>
    )
    
};

export default Chats;