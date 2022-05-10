import { Button, Table } from 'react-bootstrap'

interface Props {
  users: {
    id: number
    email: string
    name: string
  }[]
  handleEdit: (id: number) => void
  handleShowModal: (id: number) => void
}

export default function UsersTable({ users, handleEdit, handleShowModal }: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th className="w-25">Nome</th>
          <th className="w-25">E-mail</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="w-10">
              <Button
                variant="warning"
                onClick={() => handleEdit(user.id)}
                className="py-1"
              >
                Editar
              </Button>
            </td>
            <td className="w-10">
              <Button
                variant="danger"
                onClick={() => handleShowModal(user.id)}
                className="py-1"
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
