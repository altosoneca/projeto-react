import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Quadrados from "./login-img.component"
import { FaDog } from 'react-icons/fa';


export default function Login() {
  

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  var email="";
  var password="";

  function handleSubmit(event) {
    console.log(email)
    console.log(password)
    event.preventDefault();
  }
  function handleEmail(event) {
    email=event.target.value;
    // setEmail(event.target.value)
  }
  function handlePassword(event) {
    password=event.target.value;
    // setPassword(event.target.value)
  }

  return (
    <div className="row">

      <Container className="container-login col-md-6">
        
        <Form className="form-login" onSubmit={handleSubmit}>
        <h5 className="mb-5 font-italic "><FaDog className="mb-2"/>&nbsp;Petshop</h5>
        <h1 className="header-login font-weight-bold mb-4">Entrar no Portal de Gestão.</h1>
        
          <Form.Group>
            <Form.Label className="font-weight-normal">Email</Form.Label>
            <Form.Control className="input-login" onChange={e => handleEmail(e)} type="email" placeholder="name@email.com" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="font-weight-normal">Senha</Form.Label>
            <Form.Control className="input-login" onChange={e => handlePassword(e)} type="password" placeholder="*********" />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Me mantenha logado" />
          </Form.Group>


          <button onSubmit={e => handleSubmit(e)} className="button-login"  type="submit">
            Login
            </button>
            <div className="d-flex justify-content-center ">
              <h6 className="header-login font-weight-normal mt-2"><a href="#">Crie uma conta</a> <strong>·</strong> <a href="#">Esqueceu sua senha?</a></h6>
            </div>
        </Form>


      </Container>

      <Container className="container-login-img col-md-6">
        <Quadrados />
      </Container>


    </div>


  );
}