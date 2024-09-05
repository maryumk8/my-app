import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface IChildren {
  children: ReactNode;
}
const PrivateRoutes: React.FC<IChildren | any> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoutes;
