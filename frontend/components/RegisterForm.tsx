import { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function RegisterForm() {
  return (
    <Fragment>
      <h3>Cadastrar usuário</h3>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className="mb-3 w-50 p-2" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3 w-50 p-2" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 w-50 p-2" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3 w-25">
          Cadastrar
        </Button>
      </Form>
    </Fragment>
  )
}
