import React, { use } from 'react';
import { Modal, Box } from '@mui/material';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  borderRadius: '8px',
  p: 4,
};

function AuthModal({ handleClose, open }) {
  const loccation = useLocation();
  return (
    <Modal
      open={open}
      onClose={handleClose} 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
       {loccation.pathname === '/login'? (<LoginForm handleClose={handleClose} />) : (<RegisterForm handleClose={handleClose} />)}
      </Box>
    </Modal>
  );
}

export default AuthModal;
