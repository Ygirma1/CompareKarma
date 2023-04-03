import React from 'react'
import { Modal, Button } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteConfirmation.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
};

const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, type, message }) => {
    return (
        <Modal style={style} show={showModal} onHide={hideModal} className='modal'>
        <Modal.Header>
          <Modal.Title className='title'>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="body">{message}</div></Modal.Body>
        <Modal.Footer className='footer2'>
          <Button variant="default" className='cancel-button' onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="default" className='delete-button2' onClick={() => confirmModal(type, id) }>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteConfirmation;