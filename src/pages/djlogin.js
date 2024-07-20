import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../components/header2';
const DjLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    if (username && password) {
      // Navigate to another page or handle login
      // navigate('/somePage'); // Replace '/somePage' with your actual route
      console.log('Username:', username);
      console.log('Password:', password);
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
                <h2>Login As A DJ For Wishtun</h2>
                <p>Login Now To Upload Songs</p>
                {/* Form */}
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="col-lg-12">
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
                    <div className="col-lg-12">
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
                        <button className="btn" type="submit">Login!</button>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                      <p style={{ marginBottom: '0!important' }}>
                        Don't Have An Account? <a href="/Djsignup">Sign Up</a>
                      </p>
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

export default DjLogin;
