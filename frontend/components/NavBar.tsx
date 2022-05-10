import { Col, Container, Nav, Navbar } from 'react-bootstrap'

export default function NavBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          MeuGuru
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/register">Cadastrar</Nav.Link>
          <Nav.Link href="/list/1">Lista</Nav.Link>
          <Nav.Link href="/search">Buscar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
