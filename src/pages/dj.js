import React from 'react'
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import profileImage from '../img/about-img.jpg'; // Ensure the path is correct
import Header2 from '../components/header2';
import Footer from '../components/footer';
const dj = () => {
  return (
    <div>
      
<Header2/>

    <div className="container mt-5" style={{ padding: '50px 0px' }}>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card">
            <img src={profileImage} className="card-img-top" alt="Person 1" />
            <div className="card-body text-center">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem eu odio blandit pulvinar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card">
            <img src={profileImage} className="card-img-top" alt="Person 2" />
            <div className="card-body text-center">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in lorem eu odio blandit pulvinar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    <Footer />
    </div>
  )
}

export default dj
