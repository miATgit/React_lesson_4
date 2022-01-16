import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Alert} from 'react-bootstrap';
import { useState } from 'react';
import './App.css';


function App() {
  
  const [inputMessage, setInputMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const botSay = ["I'll be back", 'Hasta la vista, baby', 'Follow the white rabbit', 'Knock, knock, Neo'];
  const max = botSay.length;
  console.log(max);
  let rand = Math.floor(Math.random() * max);

  const botAnswer = botSay[rand];
  

 const onSendMessage = () => {
    setMessageArray(prev => [...prev, inputMessage]);
    setInputMessage('');
    setTimeout(() => {
      setMessageArray(prev => [...prev, botAnswer]);
  }, 1500);
  };

  
  return(
    <Container className="p-3 main">
      <h2>Chat with me</h2>
      <h5>To send the message push "Send Message" or press 'Enter' on the keyboard</h5>
    <Container className="p-5 mb-4 bg-light rounded-3 MessageList">
        {
          messageArray.map((message, i) => (<Alert variant={i%2 === 0 ? 'success' : 'danger'} className={i%2 === 0 ? 'message left' : 'message right'} key={i}>{message}</Alert>))
        }
        
        </Container>
      <Container className='MessageInput'>
        <div>Write your message here:</div>
        <input className='inputBlock'
         value = {inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={({key}) => {
            if (key === 'Enter' || key.code === 13){
            onSendMessage()}
          }}></input>
        <Button variant="success" onClick={onSendMessage}>Send Message</Button>
      </Container>
    </Container>
  )
}

export default App;
