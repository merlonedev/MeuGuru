import { Table } from 'react-bootstrap'

export default function UsersTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  )
}
