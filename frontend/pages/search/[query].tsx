import { Fragment } from 'react'
import { Container, Table } from 'react-bootstrap'
import NavBar from '../../components/NavBar'

export async function getServerSideProps({ params }) {
  const data = await fetch(`http://localhost:3001/search/${params.query}`)
  const users = await data.json()

  return { props: { users } }
}

export default function SearchResult({ users }) {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Table striped bordered hover></Table>
      </Container>
    </Fragment>
  )
}
