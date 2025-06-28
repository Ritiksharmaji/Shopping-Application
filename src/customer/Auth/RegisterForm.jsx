import { TextField, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../State/Auth/Action';


function RegisterForm({ handleClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt=localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);

useEffect(()=>{
  if(jwt){
    dispatch(getUser(jwt))
  }

},[jwt])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const formData = new FormData(e.target);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
    }
  
    console.log(data);
    // dispatch the register action 
    // we can dispatch a action either like this: dispatch({ type: 'REGISTER_REQUEST', payload: data }); or like this: dispatch(register(data))
    dispatch(register(data))
    //handleClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4 text-purple-600">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="flex-1">
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </div>
        </div>

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
          Register
        </Button>
      </form>

      <p className="text-sm text-center mt-4">
  Already have an account?{" "}
  <span
    className="text-purple-600 cursor-pointer hover:underline"
    onClick={()=>navigate('/login')}
  >
    Login
  </span>
</p>

    </div>
  );
}

export default RegisterForm;
