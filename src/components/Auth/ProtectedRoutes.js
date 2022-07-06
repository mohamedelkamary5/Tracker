import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
const useAuthAdmin = () => {

  const loggedInAdmin = localStorage.getItem('loggedInAdmin')
  return loggedInAdmin;
};

const useAuthRestaurant = () => {

  const loggedInRestaurant = localStorage.getItem('loggedInRestaurant')
  return loggedInRestaurant;
};


 const ProtectedRoutesAdmin = (e) => {
  //  const isAuth = true;
   const isAuth = useAuthAdmin();
  return isAuth ? <Outlet /> : <Navigate to="admin/login" />;
};

export const ProtectedRoutesRestaurant = (e) => {
  // const isAuth = true;
  const isAuth = useAuthRestaurant();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};






export default ProtectedRoutesAdmin;
