import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout';
import Dashboard from './dashboard';
import RequestSongs from './requestsongs';
import ApprovedSongs from './approvedsongs';
import TransactionHistory from './transactionhistory';
import Profile from './profile';
import UploadSongs from './uploadsongs';

function App() {
  return (
      <Layout/>
  );
}

export default App;
