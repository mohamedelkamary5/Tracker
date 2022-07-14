import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import OverLay from '../../../glopal/OverLay';
// import SideBar from "./../../../bars/SideBar";
import SideBar from "./../../Restaurants-Components/bars/SideBar";

const SidebarLayout = () => {

    return (
        <>
        <OverLay/>
          <SideBar  />
          <OverLay />
          <Outlet />
        </>

    )
};

export default SidebarLayout