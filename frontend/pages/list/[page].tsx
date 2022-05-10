import Link from 'next/link'
import Router from 'next/router'
import { Fragment, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import DeleteModal from '../../components/DeleteModal'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../../components/NavBar'
import Paginator from '../../components/Paginator'
import UsersTable from '../../components/UsersTable'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await fetch('http://localhost:3001/users', {
    method: 'GET',
    headers: { page: String(params.page) },
  })
  const users = await data.json()

  const count = await fetch('http://localhost:3001/userCount')
  const userCount = await count.json()

  return {
    props: { users, userCount },
  }
}

interface Props {
  users: {
    id: number
    name: string
    email: string
  }[]
  userCount: number
}

export default function UsersList({ users, userCount }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [selected, setSelected] = useState(0)
  const [page, setPage] = useState(1)

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

  const handlePage = async (pageNum: number) => {
    setPage(pageNum)
    await Router.push(`/list/${pageNum}`)
  }

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
        <Paginator
          userCount={userCount}
          active={page}
          handlePage={handlePage}
        />
      </Container>
    </Fragment>
  )
}
