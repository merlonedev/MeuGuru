import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RegisterForm from '../pages/register'

export default function MainContainer() {
  return (
    <Container>
      <Col className="justify-content-center text-center flex-column">
        <Row>
          <Link href={'/register'}>Cadastrar usuários</Link>
        </Row>
        <Row>
          <Link href={'/list'}>Ver lista</Link>
        </Row>
      </Col>
    </Container>
  )
}
