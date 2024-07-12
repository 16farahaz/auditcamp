import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Audit from './Components/Audit';
import Dashboard from './Components/Routes/Dashboard';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ maxWidth: '900px', marginLeft: '0px', marginRight: '0px', paddingTop: '20px' }}>
        <Routes>
          <Route path="/audit" element={<Audit />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
