import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </React.Fragment>
  );
}

export default MainLayout;
