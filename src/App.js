import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout'; // Assuming Layout is a wrapper component for nested routes
import Dashboard from './pages/dashboard';
import RequestSongs from './pages/requestsongs';
import ApprovedSongs from './pages/approvedsongs';
import TransactionHistory from './pages/transactionhistory';
import Profile from './pages/profile';
import UploadSongs from './pages/uploadsongs';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import DJs from './pages/dj';
import Login from './pages/login';
import Signup from './pages/signup'
import Djsignup from './pages/djsignup'
import Djlogin from './pages/djlogin'
import Otp from './pages/optVerification'
import Newsletter from './components/newsletter';
import Whychoose from './components/whychoose';
import Slider from './components/slider';
import Header from './components/header';
import Footer from './components/footer';

import './styles/bootstrap.min.css';
import './styles/nice-select.css';
import './styles/font-awesome.min.css';
import './styles/icofont.css';
import './styles/slicknav.min.css';
import './styles/owl-carousel.css';
import './styles/datepicker.css';
import './styles/animate.min.css';
import './styles/magnific-popup.css';
import './styles/normalize.css';
import './styles/responsive.css';
import './styles/styles.css';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dj" element={<DJs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Djsignup" element={<Djsignup/>} />
        <Route path="/Djlogin" element={<Djlogin/>} />
        <Route path="/OTP" element={<Otp/>} />

      </Routes>  
    
     <Routes>
        {/* Define nested routes if Layout is used */}
        {/* <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="requestsongs" element={<RequestSongs />} />
          <Route path="approvedsongs" element={<ApprovedSongs />} />
          <Route path="transactionhistory" element={<TransactionHistory />} />
          <Route path="profile" element={<Profile />} />
          <Route path="uploadsongs" element={<UploadSongs />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
