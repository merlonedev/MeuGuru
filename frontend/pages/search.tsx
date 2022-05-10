import { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Search() {
  return (
    <Fragment>
      <NavBar />
      <Form className="d-flex flex-column align-items-center">
        <h3>Buscar usuários</h3>
        <Form.Group className="mb-2 w-50 p-2" controlId="email">
          <Form.Label>Nome ou E-mail</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button>Buscar</Button>
      </Form>
    </Fragment>
  )
}
