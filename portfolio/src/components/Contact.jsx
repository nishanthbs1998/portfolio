import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {send} from "emailjs-com"
import { useState } from 'react';
const Contact=()=>{

     const [toSend, setToSend] = useState({
    name: '',
    email:'',
    subject:'',
    message: '',
    
  });

  const onSubmit = (e) => {
     e.preventDefault();
    send(
       
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
       process.env.REACT_APP_UNIQUE_KEY,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent!!");
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("There was an error in sending the message. Please try again.")
      });
  };

  const handleNameChange = (e) => {

    setToSend({ ...toSend, name: e.target.value });
  };
const handleEmailChange = (e) => {

    setToSend({ ...toSend, email: e.target.value });
  };
  const handleSubjectChange = (e) => {

    setToSend({ ...toSend, subject: e.target.value });
  };
    const handleMessageChange = (e) => {

    setToSend({ ...toSend, message: e.target.value });
  };

return (
  <div className='formContent'>
     <Form onSubmit={onSubmit}>

        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your name" value={toSend.name} onChange={handleNameChange} />
        
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" value={toSend.email} onChange={handleEmailChange}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="Enter subject" value={toSend.subject} onChange={handleSubjectChange}/>
        
      </Form.Group>

            
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3}  value={toSend.message} onChange={handleMessageChange}/>
        
      </Form.Group>

      
      <button className="customButton"  type="submit"  >
        Send message
      </button>
    </Form>
    </div>
)
}

export default Contact