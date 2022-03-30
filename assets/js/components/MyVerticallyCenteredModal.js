import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  
  const handleSubmit = event => {
    // event.preventDefault();
    setName('');
    setFirstname('');
    setEmail('');
    setAdress('');
    setPhone('');
    setBirthdate('');

    axios.post('/new', {
      name: name,
      firstname: firstname,
      email: email,
      adress: adress,
      phone: phone,
      birthdate: birthdate
    })
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      console.log(error);
    });

  }
    
    
  console.log(name, firstname, email);
  return (
    <Modal
      {...props}
      size="mb"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          New Client
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit = { handleSubmit }>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Firstname</Form.Label>
          <Form.Control type="firstname" placeholder="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Adresse</Form.Label>
          <Form.Control type="text" placeholder="Enter Adresse" value={adress} onChange={(e) => setAdress(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>birthDate</Form.Label>
          <Form.Control type="date" placeholder="Enter birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}/>
        </Form.Group>
        
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
