import Link from 'next/link'
import { Container, Table } from 'react-bootstrap'

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3001/users')
  const users = await data.json()

  return {
    props: { users },
  }
}

interface Props {
  users: {
    id: number
    name: string
    email: string
  }[]
}

export default function UsersList({ users }: Props) {
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
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
