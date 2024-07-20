import React from 'react'

import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import profileImage from '../img/about-img.jpg';
import Header2 from '../components/header2';
const login = () => {
  return (
    <div>
       <Header2/> 
       <section className="contact-us section">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="inner" style={{ width: '700px' }}>
          <div className="row">
            <div style={{ width: '100%' }}>
              <div className="contact-us-form">
                <h2>Login For Wishtun</h2>
                <p>Login Now To Listen To Songs</p>
                {/* Form */}
                <form className="form" method="post">
                  <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="text" name="username" placeholder="Username" required />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input type="password" name="password" placeholder="Password" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group login-btn">
                        <button className="btn" type="submit">Login!</button>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }}>
                        <p style={{ marginBottom: '0px!important' }}>
                          Don't Have An Account? <Link to="/signup">Sign Up</Link>
                        </p>
                      </div>

                      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0px' }}>
                        <p style={{ marginBottom: '0px!important' }}>
                          Have A DJ Account? <Link to="/Djlogin">Log In Here</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default login
