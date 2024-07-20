import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Dashboard from './pages/dashboard';
import RequestSongs from './pages/requestsongs';
import ApprovedSongs from './pages/approvedsongs';
import TransactionHistory from './pages/transactionhistory';
import Profile from './pages/profile';
import UploadSongs from './pages/uploadsongs';

import Logo from '../src/img/logo.png';

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

import Header from './components/header';
import Footer from './components/footer';
import Contact from './components/contactus'
import Newsletter from './components/newsletter'
import Whychoose from './components/whychoose'
import Slider from './components/slider'
function App() {
  return (
    <Router>
      <Header />
      <Slider />
      <Whychoose />
      <Contact/>
      <Newsletter/>
      <Footer />

      
      <div className="container">
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="requestsongs" element={<RequestSongs />} />
            <Route path="approvedsongs" element={<ApprovedSongs />} />
            <Route path="transactionhistory" element={<TransactionHistory />} />
            <Route path="profile" element={<Profile />} />
            <Route path="uploadsongs" element={<UploadSongs />} />
          </Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
