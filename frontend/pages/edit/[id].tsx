import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Button, Container, Form } from 'react-bootstrap'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await fetch(`http://localhost:3001/user/${params.id}`)
  const user = await data.json()
  return { props: { user } }
}

interface Props {
  user: {
    email: string
    name: string
    password: string
    id: number
  }
}

export default function EditUser({ user }: Props) {
  return (
    <Container>
      <Link href={'/list'}>Voltar</Link>
      <Form className=" mb-2 d-flex flex-column align-items-center">
        <h3>Editar usuário</h3>
        <Form.Group className="mb-2 w-50 p-2" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" value={user.email} />
        </Form.Group>

        <Form.Group className="mb-2 w-50 p-2" controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={user.name} />
        </Form.Group>

        <Button type='submit'>Salvar alterações</Button>
      </Form>

      <Form className="d-flex flex-column align-items-center">
        <h3>Editar senha</h3>
        <Form.Group className="mb-2 w-50 p-2" controlId="name">
          <Form.Label>Senha antiga</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-2 w-50 p-2" controlId="name">
          <Form.Label>Nova senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-2 w-50 p-2" controlId="name">
          <Form.Label>Confirmar nova senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button type='submit'>Confirmar nova senha</Button>
      </Form>
    </Container>
  )
}
