import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";




export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  function handleSubmit(event) {
    console.log(email);
    console.log(password);
    event.preventDefault();
  }

  return (
    <Container className="container-login">
      <Card className="card-login">
        <Card.Body className = "card-body-login">
          <Form  className="form-login" onSubmit={handleSubmit}>

            <Form.Group>
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group>
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" />
            </Form.Group>
            
            <Button  className="button-login" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}