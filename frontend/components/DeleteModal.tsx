import Router from 'next/router'
import { Button, Modal } from 'react-bootstrap'

export default function DeleteModal({ show, close, selected }) {
  const deleteUser = async () => {
    try {
      await fetch(`http://localhost:3001/user/${selected}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })

      await Router.push('/list')
      close()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza que deseja excluir este usuário?</Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={deleteUser}>
          Confirmar
        </Button>
        <Button variant="danger" onClick={close}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
