import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import '../Components/ProfilePageStyle.css';

function ProfilePage() {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [motpasse, setMotpasse] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) {
                    setError('No authentication token found. Please log in.');
                    return;
                }
                
                const response = await axios.get('http://localhost:5000/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.user);
                setName(response.data.user.name || '');
                setLastname(response.data.user.lastname || '');
                setEmail(response.data.user.email || '');
                setRole(response.data.user.role || '');
            } catch (error) {
                if (error.response && error.response.status === 403) {
                    setError('You do not have permission to access this resource. Please check your credentials.');
                } else {
                    setError('An error occurred while fetching profile data.');
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchProfileData();
    }, []);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);

            const formData = new FormData();
            formData.append('image', file);

            try {
                const token = localStorage.getItem('authToken');
                await axios.put(`http://localhost:5000/user/upimg/${user._id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Refresh the user data to reflect the updated image
                const response = await axios.get('http://localhost:5000/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data.user);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('lastname', lastname);
        formData.append('email', email);
        if (motpasse) formData.append('motpasse', motpasse);
        formData.append('role', role);
        if (imageFile) formData.append('image', imageFile);

        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`http://localhost:5000/user/update/${user._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Refresh the user data to reflect updates
            const response = await axios.get('http://localhost:5000/user/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(response.data.user);
            setEditing(false);
            setError(null);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Error updating profile.');
        }
    };

    // Memoize the image URL to avoid recomputation on every render
    const imageUrl = useMemo(() => {
        return user.image ? `http://localhost:5000/${user.image}?t=${Date.now()}` : "default-profile-pic.jpg";
    }, [user.image]);

    if (isLoading) {
        return <p>Loading profile...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="profile-card">
            <div className="profile-info">
                <div className="profile-pic-wrapper">
                    <img 
                        src={imageUrl} 
                        alt="Profile" 
                        className="profile-pic"
                        onError={(e) => e.target.src = "default-profile-pic.jpg"}
                    />
                    <label htmlFor="image-upload" className="image-upload-label">
                        <FontAwesomeIcon icon={faCamera} className="camera-icon" />
                    </label>
                    <input 
                        type="file" 
                        id="image-upload" 
                        className="image-upload-input" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                    />
                </div>
                {editing ? (
                    <form onSubmit={handleProfileUpdate} className='upf'>
                        <label className='lab'> First name</label>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                         <label className='lab'> Last name</label>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            value={lastname} 
                            onChange={(e) => setLastname(e.target.value)} 
                        />
                         <label className='lab'> Email address</label>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                     <label className='lab'> Role </label>
                        <select 
                            value={role} 
                            onChange={(e) => setRole(e.target.value)} 
                        >
                            <option value="superadmin">Superadmin</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        <label className='lab'> Password </label>
                        <input 
                            type="password" 
                            placeholder="Password (Leave empty if unchanged)" 
                            value={motpasse} 
                            onChange={(e) => setMotpasse(e.target.value)} 
                        />
                        <button type="submit" className='upff'>Update Profile</button>
                    </form>
                ) : (
<div className='userinfo'>
 
    <div>
      <label className='lba'>Name:</label>
      <p className="nom">{user.name}</p>
    </div>
    <div>
      <label className='lba'>LastName:</label>
      <p className='lastname'>{user.lastname}</p>
    </div>
    <div>
      <label className='lba'>Email address:</label>
      <p className="email">{user.email}</p>
    </div>
    <div>
      <label className='lba'>Role:</label>
      <p className="role">{user.role}</p>
    </div>
    <button className='btn1' onClick={() => setEditing(true)}>Edit Profile</button>
  </div>


                )}
            </div>
        </div>
    );
}

export default ProfilePage;
