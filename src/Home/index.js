import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import '../App.css';
import { Button, Container, TextField, Typography } from '@material-ui/core';

function Home() {

  
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const botSay = ["I'll be back", 'Hasta la vista, baby', 'Follow the white rabbit', 'Knock, knock, Neo'];
  const max = botSay.length;
  let rand = Math.floor(Math.random() * max);

  const botAnswer = botSay[rand];

  const onSendMessage = () => {
    const trimmed =  inputMessage.trim();
    if ( trimmed !=='') {  
     setMessageArray(prev => [...prev,
       {
         messageText: inputMessage,
         author: 'user',
       }
     ]); 
    }};
  
    useEffect(() => {
      if (messageArray.length === 0) {
        return
      };
      const whoIsAuthor = messageArray[messageArray.length -1].author;
      if (whoIsAuthor === 'bot'){
        return
      };
         setTimeout(() => {
           setMessageArray(prev => [...prev, 
             {
               messageText: botAnswer,
               author: 'bot',
             }
             ]);
       }, 1500);
       setInputMessage('');
  
      
    }, [messageArray]);
  
  
  return(
    
    <Container maxWidth="sm" className="main ">
      
      
      <h5>To send the message push "Send Message" or press 'Enter' on the keyboard</h5>
     
    <Container className="MessageList">
        {
          messageArray.map((message, i) => (
          <Typography variant='h6' className={i%2 === 0 ? 'message left' : 'message right'} key={i}>
            {message.messageText}</Typography>))
        }
        
        </Container>
      <Container className='MessageInput'>
        <div>Write your message here:</div>
        <div className='MessageInput_group'>
        <TextField autoFocus  className='inputBlock' variant="outlined"  id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={2}
         value = {inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={({key}) => {
            if (key === 'Enter' || key.code === 13){
            onSendMessage()}
          }}></TextField>
        <Button variant="contained"
        color="primary" onClick={onSendMessage}>Send</Button>
        </div>
      </Container>
    </Container>
  )
}

export default Home;
