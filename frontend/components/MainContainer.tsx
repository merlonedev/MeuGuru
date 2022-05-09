import { useState } from 'react'
import { Button, Col, Container } from 'react-bootstrap'

export default function MainContainer() {
  const [status, setStatus] = useState('showUser')

  return (
    <Container>
      <Col className="justify-content-center text-center">
        {status === 'showList' ? (
          <Button variant="primary" onClick={() => setStatus('showUser')}>
            Ver usuários
          </Button>
        ) : (
          <Button variant="success" onClick={() => setStatus('showList')}>
            Ver lista
          </Button>
        )}
      </Col>
    </Container>
  )
}
