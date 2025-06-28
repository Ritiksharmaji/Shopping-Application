import { TextField, Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Auth/Action';

function LoginForm({ handleClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Submitted");

    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    console.log(data);
    // Dispatch the login action
    //dispatch({ type: 'LOGIN_REQUEST', payload: data });
    dispatch(login(data))
   // handleClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </div>

        <div>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </div>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            bgcolor: 'rgb(145, 85, 253)',
            mt: 1,
            '&:hover': {
              bgcolor: 'rgb(125, 65, 230)',
            },
          }}
        >
          Login
        </Button>
      </form>

      <p className="text-sm text-center mt-4">
        Don't have an account?{" "}
        <span
          className="text-purple-600 cursor-pointer hover:underline"
          onClick={()=>navigate('/register')}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
