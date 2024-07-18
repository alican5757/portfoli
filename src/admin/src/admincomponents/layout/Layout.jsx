import React from 'react';
import Sidebar from '../sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        {children}
      </div>
    </div>
  );
};

export default Layout;
