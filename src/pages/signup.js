import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../components/header2';
const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullname && username && phoneNumber && password) {
      // Use React Router's navigate function to redirect
      navigate('/OTP'); // Change '/OTP' to the path you want to redirect to
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
    
    <Header2/> 
    <section className="contact-us section">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="inner" style={{ width: '700px' }}>
          <div className="row">
            <div style={{ width: '100%' }}>
              <div className="contact-us-form">
                <h2>Sign Up For Wishtun</h2>
                <p>Sign Up Now To Listen To Songs</p>
                {/* Form */}
                <form id="signup-form" className="form" onSubmit={handleSubmit}>
                  <div className="image-icon">
                    <img src="data:image/png;base64,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" alt="" />
                   </div>
                  <label htmlFor="imageInput">Select an image:</label><br />
                  <input
                    type="file"
                    id="imageInput"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  /><br />

                  <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type='text'
                          name="fullname"
                          placeholder="Full Name"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button id="sign_btn" className="btn" type="submit">Sign Up!</button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                        <p style={{ marginBottom: '0!important' }}>
                          Have An Account? <a href="/login">Log In</a>
                        </p>
                      </div>

                      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                        <p style={{ marginBottom: '0!important' }}>
                          Wanna Be A DJ? <a href="/Djsignup">Sign Up Here</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
                {/* / End Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default ContactUs;
