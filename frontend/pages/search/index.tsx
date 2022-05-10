import { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavBar from '../../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from 'next/router'

export default function Search() {
  const [query, setQuery] = useState('')

  const onChange = ({ target }) => {
    setQuery(target.value)
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    await Router.push(`/search/${query}`)
  }

  return (
    <Fragment>
      <NavBar />
      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={onSubmit}
      >
        <h3>Buscar usuários</h3>
        <Form.Group className="mb-2 w-50 p-2" controlId="email">
          <Form.Label>Nome ou E-mail</Form.Label>
          <Form.Control type="text" onChange={(e) => onChange(e)} />
        </Form.Group>

        <Button type="submit">Buscar</Button>
      </Form>
    </Fragment>
  )
}
