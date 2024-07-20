import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../components/header2';
import Footer from '../components/footer';
const DjSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password && email && fullname) {
      navigate('/OTP'); // Adjust the route to your needs
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
    <Header2 />
    <section className="contact-us section">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="inner" style={{ width: '700px' }}>
          <div className="row">
            <div style={{ width: '100%' }}>
              <div className="contact-us-form">
                <h2>Sign Up As A DJ For Wishtun</h2>
                <p>Sign Up As A DJ Now To Upload Songs</p>
                {/* Form */}
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="fullname"
                          placeholder="Full Name"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button className="btn" type="submit">Sign Up!</button>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                      <p style={{ marginBottom: '0!important' }}>
                        Have An Account? <a href="/Djlogin">Log In</a>
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
     
    <Footer />
    </>
    
  );
};

export default DjSignup;
