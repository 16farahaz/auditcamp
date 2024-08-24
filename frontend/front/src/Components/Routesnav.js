import React,{useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Audit from './Audit';
import Dashboard from './Dashboard';
import Navbar from './Navbar/Navbar';
import Table from './Table';
import Cong from './Steps/Cong';
import ConsultAudit from './ConsultAudit';
import ProfilePage from './ProfilePage';
import LogoutPage from './LogoutPage';
import Comsp from './Comesp/Comsp';
import UserReg from './UserReg';
import Users from './Users';
import UserPro from './Userpro';




const Routesnav = ({ onLogout }) => {


  

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div className="container" style={{ marginLeft: '0px', marginRight: '0px', paddingTop: '20px' }}>
        <Routes>
          <Route path="/audit" element={<Audit />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Auditl" element={<Table />} />
          <Route path="/Cong" element={<Cong />} />
          <Route path="/consultaudit/:id" element={<ConsultAudit />} />
          <Route path="/espace/:id" element={<Comsp />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/user" element={<UserReg />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userpro/:id" element={<UserPro />} />



          <Route path="/logout" element={<LogoutPage onLogout={onLogout} />} />
        </Routes>
      </div>
    </>
  );
};

export default Routesnav;
