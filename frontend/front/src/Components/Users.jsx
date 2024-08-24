import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import '../Components/UsersStyle.css'; // Adjust the path to your CSS file

function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Initialize with an empty string
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Pagination: current page
  const [itemsPerPage] = useState(3); // Number of items per page
  const [error, setError] = useState(''); // Error state

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log("Token retrieved:", token); // Debugging log

    axios.get('http://localhost:5000/user/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      console.log("API response:", response.data); // Debugging log
      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
      } else {
        console.error("API response 'users' property is not an array:", response.data.users);
        setError('Unexpected response format. Please try again.');
      }
    })
    .catch(err => {
      console.error("API error:", err.response || err.message); // More detailed error logging
      setError('Failed to fetch users. Please try again.');
    });
  }, []);

  // Filter users based on search query (by name)
  useEffect(() => {
    if (searchQuery) {
      setFilteredUsers(
        users.filter(user =>
          (user.name || '').toLowerCase().includes(searchQuery.toLowerCase()) // Handle undefined user names
        )
      );
    } else {
      setFilteredUsers(users); // Show all data if search query is empty
    }
    setCurrentPage(1); // Reset to the first page whenever search query changes
  }, [searchQuery, users]);

  // Get unique user names for autocomplete options
  const userNames = [...new Set(users.map(user => user.name || ''))]; // Handle undefined names

  // Calculate the index of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle blocking a user with confirmation
  const handleBlockUser = async (userId) => {
    // Ask for user confirmation
    const isConfirmed = window.confirm('Are you sure you want to block this user?');

    // If user clicks Cancel, stop the function
    if (!isConfirmed) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('No authentication token found. Please log in.');
        return;
      }

      // Send the request to block the user
      await axios.put(`http://localhost:5000/user/block/${userId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Refresh the user list after blocking
      const response = await axios.get('http://localhost:5000/user/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
        setFilteredUsers(response.data.users);
      } else {
        console.error("API response 'users' property is not an array:", response.data.users);
        setError('Unexpected response format. Please try again.');
      }
    } catch (err) {
      console.error("Error blocking user:", err.response || err.message);
      setError('Failed to block user. Please try again.');
    }
  };

  return (
    <>
      <a href="/user" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addUserModal" style={{ marginBottom: '20px' }}>
        <i className="addbtn">&#xE147;</i> <span>Add New User</span>
      </a>
      
      <div className="container md:w-screen shadow-xl rounded-2xl pb-2 bg-white">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="search">
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    id="user-search"
                    disableClearable
                    options={userNames} // Array of strings
                    onInputChange={(event, newValue) => setSearchQuery(newValue || '')}
                    getOptionLabel={(option) => option || ''} // Handle strings directly
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search by User Name"
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
                <th>NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>STATUS</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {currentItems.map(user => (
                <tr key={user._id}>
                  <td>{user.name || 'N/A'}</td> {/* Handle undefined names */}
                  <td>{user.lastname || 'N/A'}</td> {/* Handle undefined last names */}
                  <td>{user.email || 'N/A'}</td> {/* Handle undefined emails */}
                  <td>{user.role || 'N/A'}</td> {/* Handle undefined roles */}
                  <td>{user.status || 'N/A'}</td> {/* Handle undefined statuses */}
                  <td>
                    <Link to={`/userpro/${user._id}`} className="edit">
                      <button className='btncn'>Consult</button>
                    </Link>
                    <button 
                      className='btncn' 
                      onClick={() => handleBlockUser(user._id)} // Call the block function with confirmation
                    >
                      Block Account
                    </button>
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
            {Array.from({ length: Math.ceil(filteredUsers.length / itemsPerPage) }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredUsers.length / itemsPerPage)}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
