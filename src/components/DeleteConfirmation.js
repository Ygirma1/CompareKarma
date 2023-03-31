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

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function DeleteConfirmation() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }