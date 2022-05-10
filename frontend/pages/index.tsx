import React from 'react'
import NavBar from '../components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

export default function MainPage() {
  return (
    <main>
      <NavBar />
      <Container className='text-center mt-5'>
        <h2>Nome: Rodrigo Merlone</h2>
        <h2>Vaga: Dev. Fullstack Jr.</h2>
      </Container>
    </main>
  )
}
