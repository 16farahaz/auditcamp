import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import '../Components/TableStyle.css'; // Adjust the path as per your project structure

function Table() {
  const [audits, setAudits] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAudits, setFilteredAudits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Pagination: current page
  const [itemsPerPage] = useState(3); // Number of items per page

  useEffect(() => {
    axios.get('http://localhost:5000/audit/')
      .then(response => {
        setAudits(response.data);
        setFilteredAudits(response.data); // Initialize filteredAudits
      })
      .catch(err => console.log(err));
  }, []);

  // Filter audits based on search query (company name only)
  useEffect(() => {
    if (searchQuery) {
      setFilteredAudits(
        audits.filter(audit =>
          audit.nom.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredAudits(audits); // Show all data if search query is empty
    }
    setCurrentPage(1); // Reset to the first page whenever search query changes
  }, [searchQuery, audits]);

  // Get unique company names for autocomplete options
  const companyNames = [...new Set(audits.map(audit => audit.nom))];

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAudits.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <a href="/audit" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addEmployeeModal" style={{ marginBottom: '20px' }}>
        <i className="addbtn">&#xE147;</i> <span>Add New Audit</span>
      </a>
      
      <div className="container md:w-screen shadow-xl rounded-2xl pb-2 bg-white">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="search">
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    id="company-search"
                    disableClearable
                    options={companyNames}
                    onInputChange={(event, newValue) => setSearchQuery(newValue || '')}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search by Company Name"
                        InputProps={{
                          ...params.InputProps,
                          type: 'search',
                        }}
                      />
                    )}
                  />
                </Stack>
              </div>
            </div>
          </div>
          <table className="table1">
            <thead>
              <tr>
                <th>COMPANY NAME</th>
                <th>Company email</th>
                <th>PHONE</th>
                <th>RSSI</th>
                <th>Email</th>
                <th>AUDITOR</th>
                <th>NORME</th>
                <th>DATE</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {currentItems.map(audit => (
                <tr key={audit._id}>
                  <td>{audit.nom}</td>
                  <td>{audit.emailc}</td>
                  <td>{audit.numt}</td>
                  <td>{audit.rssi}</td>
                  <td>{audit.emailr}</td>
                  <td>{audit.auditor}</td>
                  <td>{audit.norme}</td>
                  <td>{audit.date}</td>
                  <td>
                    <Link to={`/consultaudit/${audit._id}`} className="edit">
                      <button className='btncn'>Consult</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination controls */}
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
            {Array.from({ length: Math.ceil(filteredAudits.length / itemsPerPage) }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredAudits.length / itemsPerPage)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
