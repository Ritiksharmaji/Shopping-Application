import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Add Delevery Address', 'Order Summary', "payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch= new URLSearchParams(location.search);

  // to make step go by using the url also like if i write in url as http://localhost:5173/?step=3 then it will go to step-3 directlly

  const step = querySearch.get("step");
  
  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
   <div className=''>
     <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>

             <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: '1 1 auto' }} />
            {/* <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
          </Box>
          <div className=''>
            {step == 2 ? <DeliveryAddressForm/> : <OrderSummary/>}
          </div>
        </React.Fragment>
      )}
    </Box>
   </div>
  );
}

