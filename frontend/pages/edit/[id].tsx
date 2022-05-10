import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'

export default function EditUser() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const findUser = async () => {
      const user = await fetch(`http://localhost:3001/user/${id}`)
      console.log(user)
    }

    findUser()
  }, [id])

  return (
    <Container>
      <Link href={'/list'}>Voltar</Link>

      <Form className="d-flex flex-column align-items-center">
        <h3>Editar usuário</h3>
      </Form>
    </Container>
  )
}
