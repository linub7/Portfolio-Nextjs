import React from 'react';
import Header from '../shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseLayout = ({
  children,
  className,
  user,
  loading,
  navClass = 'with-bg',
}) => {
  return (
    <div className="layout-container">
      <ToastContainer />
      <Header className={navClass} user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
