import { GetServerSideProps } from 'next'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import EditModal from '../../components/EditModal'
import NavBar from '../../components/NavBar'

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
  const [showModal, setShowModal] = useState(false)
  const [info, setInfo] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
  })

  const onChange = ({ target }) => {
    setInfo({
      ...info,
      [target.id]: target.value,
    })
  }

  const handleShowModal = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <NavBar />
      <Container>
        <Form
          className=" mb-2 d-flex flex-column align-items-center"
          onSubmit={(e) => handleShowModal(e)}
        >
          <h3>Editar usuário</h3>
          <Form.Group className="mb-2 w-50 p-2" controlId="email">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              value={info.email}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>

          <Form.Group className="mb-2 w-50 p-2" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={info.name}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>

          <Button type="submit">Salvar alterações</Button>
        </Form>

        <EditModal
          show={showModal}
          email={info.email}
          name={info.name}
          id={user.id}
          close={handleCloseModal}
        />
      </Container>
    </Fragment>
  )
}
