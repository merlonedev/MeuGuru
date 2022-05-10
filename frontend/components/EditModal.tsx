import Router from 'next/router'
import { Button, Modal } from 'react-bootstrap'



export default function EditModal({ show, close, name, email, id }) {
  const body = JSON.stringify({ name, email })
  const editUser = async () => {
    try {
      await fetch(`http://localhost:3001/user/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body,
      })

      close()
      await Router.push('/list')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>Confirmar alterações do usuário?</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={editUser}>
          Confirmar
        </Button>
        <Button variant="danger" onClick={close}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
