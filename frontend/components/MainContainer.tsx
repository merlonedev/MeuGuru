import { Fragment, useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import RegisterForm from './RegisterForm'
import UsersTable from './UsersTable'

export default function MainContainer() {
  const [status, setStatus] = useState('showUser')

  return (
    <Container>
      <Col className="justify-content-center text-center">
        {status === 'showList' ? (
          <Fragment>
            <Button
              variant="primary"
              className="mb-2"
              onClick={() => setStatus('showUser')}
            >
              Cadastrar usuários
            </Button>
            <UsersTable />
          </Fragment>
        ) : (
          <Fragment>
            <Button
              variant="success"
              className="mb-2"
              onClick={() => setStatus('showList')}
            >
              Ver lista
            </Button>
            <RegisterForm />
          </Fragment>
        )}
      </Col>
    </Container>
  )
}
