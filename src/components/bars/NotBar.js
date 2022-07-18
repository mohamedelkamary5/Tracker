import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import CheckConnection from '../../Shared/Services/CheckConnection/CheckConnection';
import OverLay from '../glopal/OverLay';
import SideBar from "./../bars/SideBar";

const SidebarLayoutRestaurant = () => {

  return (
    <>
      <OverLay />
      <SideBar />
      <OverLay />
      <CheckConnection>
        <Outlet />
      </CheckConnection>
    </>

  )
};

export default SidebarLayoutRestaurant