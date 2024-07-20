import React, { useState, useEffect } from 'react';
import '../profile.css'; // Ensure you create the appropriate CSS file for styling
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    phoneNumber: '',
    password: '',
    profilePic: '',
  });

  const [image, setImage] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false); // State to control visibility of save button

  // Fetch profile data on component mount
  useEffect(() => {
    fetchProfileData();
  }, []); 

  const fetchProfileData = async () => {
    try {
      const response = await axios.get('https://wishtun-d5e089f27132.herokuapp.com/admin/admin/668a170aeee8692179153c14');
      const { email, username, phoneNumber, profilePic } = response.data.data;
      setFormData({ email, username, phoneNumber, password: '', profilePic });
      setImage(`https://wishtun-d5e089f27132.herokuapp.com/admin/${profilePic}`); // Set the image state with the profile picture URL
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = async (e) => {
    const selectedFile = e.target.files[0];

    setImage(URL.createObjectURL(selectedFile));

    const formDataUpload = new FormData();
    formDataUpload.append('image', selectedFile);

    try {
      const response = await axios.post('https://wishtun-d5e089f27132.herokuapp.com/admin/admin/uploads/image/668a170aeee8692179153c14', formDataUpload);
      console.log('Image uploaded successfully:', response.data);
      setFormData({
        ...formData,
        profilePic: response.data.imageUrl,
      });
      setShowSaveButton(true); // Show save button after successful image upload

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch('https://wishtun-d5e089f27132.herokuapp.com/admin/admin/668a170aeee8692179153c14', formData);
      console.log('Profile updated successfully:', response.data);
      setShowSaveButton(false); // Hide save button after profile update
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="profile-container">
      <h1>Hello Evano 👋</h1>
      <div className="profile-content">
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your Mobile No"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {showSaveButton && (
            <button type="submit" className="update-button">Save</button>
          )}
        </form>
        <div className="profile-image">
          <input
            type="file"
            id="fileInput"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          {image ? (
            <img src={image} alt="Profile" className="profile-pic" />
          ) : (
            <div className="image-placeholder">
              <i className="fas fa-user"></i>
              <p>Upload Image</p>
            </div>
          )}
          <button onClick={triggerFileInput} className="upload-button">Upload Photo</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
