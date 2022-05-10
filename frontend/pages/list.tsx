import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import DeleteModal from '../components/DeleteModal'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState(0)

  const handleShowModal = (id: number) => {
    setShowModal(true)
    setSelected(id)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleEdit = async (id: number) => {
    await Router.push(`/edit/${id}`)
  }

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
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className="w-10">
                <Button variant="warning" onClick={() => handleEdit(user.id)}>
                  Editar
                </Button>
              </td>
              <td className="w-10">
                <Button
                  variant="danger"
                  onClick={() => handleShowModal(user.id)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <DeleteModal
        show={showModal}
        close={handleCloseModal}
        selected={selected}
      />
    </Container>
  )
}
