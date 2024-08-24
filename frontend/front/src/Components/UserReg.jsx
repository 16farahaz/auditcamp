import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './UserRegStyle.css'; // Import the CSS file

const UserReg = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState('');

  const onSubmit = async (data) => {
    setLoading(true);  // Start loading
    setBackendError('');  // Clear previous backend errors

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('motpasse', data.motpasse);
    formData.append('status', data.status);
    formData.append('role', data.role);
    if (data.image[0]) formData.append('image', data.image[0]);

    try {
      const response = await axios.post('http://localhost:5000/user/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('User registered successfully!');
      console.log('User created:', response.data);
      reset();
    } catch (error) {
      if (error.response) {
        // Display the error message from the backend
        setBackendError(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        // Handle other errors
        setBackendError('Request error: ' + error.message);
      }
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className="containerrr">
      <h1 className="titleee">Create User</h1>
      {loading ? <p>Submitting...</p> : (
        <form onSubmit={handleSubmit(onSubmit)} className="formm">
          {backendError && <p className="backendError">{backendError}</p>} {/* Display backend error */}

          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="name" className="labelll">Name:</label>
              <input
                type="text"
                id="name"
                className="inputtt"
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'Name must contain only alphabetic characters'
                  }
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>
            <div className="formGroup">
              <label htmlFor="lastname" className="labelll">Last Name:</label>
              <input
                type="text"
                id="lastname"
                className="inputtt"
                {...register('lastname', {
                  required: 'Last name is required',
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'Last name must contain only alphabetic characters'
                  }
                })}
              />
              {errors.lastname && <p className="error">{errors.lastname.message}</p>}
            </div>
          </div>

          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="email" className="labelll">Email:</label>
              <input
                type="email"
                id="email"
                className="inputtt"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="formGroup">
              <label htmlFor="motpasse" className="labelll">Password:</label>
              <input
                type="password"
                id="motpasse"
                className="inputtt"
                {...register('motpasse', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long'
                  }
                })}              />
              {errors.motpasse && <p className="error">{errors.motpasse.message}</p>}
            </div>
          </div>

          <div className="formGroup">
            <label htmlFor="image" className="labelll">Image:</label>
            <input
              type="file"
              id="image"
              className="inputtt"
              {...register('image', {
                validate: {
                  checkFileType: value => !value[0] || value[0].type.includes('image') || 'Please upload a valid image.',
                  checkFileSize: value => !value[0] || value[0].size < 2000000 || 'File size should be less than 2MB'
                }
              })}
            />
            {errors.image && <p className="error">{errors.image.message}</p>}
          </div>

          <div className="formGroup">
            <label htmlFor="status" className="labelll">Status:</label>
            <select
              id="status"
              className="selecttt"
              {...register('status', { required: 'Status is required' })}
            >
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>
            {errors.status && <p className="error">{errors.status.message}</p>}
          </div>

          <div className="formGroup">
            <label htmlFor="role" className="labelll">Role:</label>
            <select
              id="role"
              className="selecttt"
              {...register('role', { required: 'Role is required' })}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Superadmin</option>
            </select>
            {errors.role && <p className="error">{errors.role.message}</p>}
          </div>

          <button type="submit" className="submitBut">Submit</button>
        </form>
      )}
    </div>
  );
};

export default UserReg;
