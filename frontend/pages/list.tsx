import Link from 'next/link'
import { Container, Table } from 'react-bootstrap'

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3001/users')
  const users = await data.json()

  return {
    props: { users },
  }
}

export default function UsersList({ users }) {
  console.log(`🚀 ~ users`, users)
  return (
    <Container>
      <Link href={'/'}>Voltar</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
