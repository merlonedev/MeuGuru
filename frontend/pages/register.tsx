import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default function RegisterForm() {
  const [info, setInfo] = useState({
    email: '',
    name: '',
    password: '',
  })

  const onChange = ({ target }) => {
    setInfo({
      ...info,
      [target.id]: target.value,
    })
  }

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    try {
      await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info),
      })

      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Link href={'/'}>Voltar</Link>
      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={onSubmit}
      >
        <h3>Cadastrar usuário</h3>
        <Form.Group className="mb-2 w-50 p-2" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" onChange={(e) => onChange(e)} />
        </Form.Group>

        <Form.Group className="mb-2 w-50 p-2" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" onChange={(e) => onChange(e)} />
        </Form.Group>

        <Form.Group className="mb-2 w-50 p-2" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" onChange={(e) => onChange(e)} />
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-2 w-25">
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}
