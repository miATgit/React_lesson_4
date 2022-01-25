 import Button from '@material-ui/core/Button';
 import { useState, useEffect } from 'react';
 import {Typography, TextField, Container} from '@material-ui/core/';
 /*import { nanoid } from 'nanoid';*/
 import { getChatList } from '../Data/data';
 import { Link, Outlet } from "react-router-dom";

function Chats() {

  /*let chatId = nanoid();*/

    const [chatName, setChatName] = useState('');
    const [chatArray, setChatArray] = useState([]);

    const onAddChat = () => {
        if (chatName !=='') {  
            setChatArray(prev => [...prev, 
              {
              chatNname: chatName,
              /*id: chatId,*/
              }]);
              /*setChatName(''); */
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

    let chatItems = getChatList();
      
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
        <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {chatItems.map(chatItem => (
          <Link
            style={{ display: "flex", margin: "1rem 0", justifyContent: "end" }}
            to={`/chats/${chatItem.number}`}
            key={chatItem.number}
          >
            <p className='chatDescr'>{chatItem.name} <span className='chatTopic'> тема чата: {chatItem.description}</span></p>
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
        
        </Container>
       </>
    )
    
};

export default Chats;