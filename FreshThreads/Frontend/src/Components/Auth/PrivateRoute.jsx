import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const token = useSelector((state) => state.auth.token);

  return token ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
