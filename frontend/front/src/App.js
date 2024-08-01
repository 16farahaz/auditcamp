import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Audit from './Components/Audit';
import Dashboard from './Components/Routes/Dashboard';
import Navbar from './Components/Navbar/Navbar';

import Table from './Components/Table';
import Cong from "./Components/Steps/Cong";
import ConsultAudit from './Components/ConsultAudit';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{  marginLeft: '0px', marginRight: '0px', paddingTop: '20px' }}>
        <Routes>
          {/*maxWidth: '900px',*/}
          <Route path="/audit" element={<Audit />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Auditl" element={<Table/>}/>
          <Route path="/Cong" element={<Cong/>}/>
          <Route path="/ConsultAudit/:id" element={<ConsultAudit/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
