import Router from 'next/router'
import { Fragment, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import DeleteModal from '../../components/DeleteModal'
import NavBar from '../../components/NavBar'
import UsersTable from '../../components/UsersTable'

export async function getServerSideProps({ params }) {
  const data = await fetch(`http://localhost:3001/search/${params.query}`)
  const users = await data.json()

  return { props: { users } }
}

export default function SearchResult({ users }) {
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

  console.log(users.length)
  return (
    <Fragment>
      <NavBar />
      <Container>
        <UsersTable
          users={users}
          handleEdit={handleEdit}
          handleShowModal={handleShowModal}
        />
        <DeleteModal
          show={showModal}
          close={handleCloseModal}
          selected={selected}
        />
      </Container>
    </Fragment>
  )
}
