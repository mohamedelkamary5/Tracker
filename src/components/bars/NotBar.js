import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import OverLay from '../glopal/OverLay';
import SideBar from "./../bars/SideBar";

const SidebarLayoutRestaurant = () => {

    return (
        <>
          <OverLay/>
          <SideBar  />
          <OverLay />
          <Outlet />
        </>

    )
};

export default SidebarLayoutRestaurant