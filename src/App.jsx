import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // ✅ only Router

import CustomerRouters from './customer/Routers/CustomerRouters';

function App() {
  return (
   
      <CustomerRouters />
    
  );
}

export default App;
