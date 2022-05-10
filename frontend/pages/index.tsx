import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Row } from 'react-bootstrap'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MainPage() {
  return (
    <main>
      <NavBar />
      <Container className="text-center mt-5">
        <h2>Nome: Rodrigo Merlone</h2>
        <h2>Vaga: Dev. Fullstack Jr.</h2>
        <a href="https://github.com/merlonedev" target="_blank">
          <FaGithubSquare color="#1B5299" size={50} />
        </a>
        <a href="https://linkedin.com/in/rodrigomerlone" target="_blank">
          <FaLinkedin color="#1B5299" size={50} />
        </a>
      </Container>
    </main>
  )
}
