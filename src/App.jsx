import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // ✅ only Router

import CustomerRouters from './customer/Routers/CustomerRouters';

function App() {
  return (
    <Router>
      <CustomerRouters />
    </Router>
  );
}

export default App;
