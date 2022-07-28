import React from 'react'
import ReactDOM from 'react-dom';
import AddRestaurant from "../Restaurants/AddForm";
import AddShipping from "../Shipping/AddForm";
import AddDriver from "../Drivers/AddForm";
import AddManager from "../Managers/AddForm";
import AddCurrency from "../Currency/AddForm";
import AddQuotes from "../Quotes/AddForm";
import AddOrderForm from "../Restaurants-Managment/Restaurants-Components/Orders/AddForm";
import '../../i18n';
import { ConfigProvider } from 'antd';
const ModelPupup = () => {
  return ReactDOM.createPortal (
    <>
    
    <AddRestaurant />
    <AddShipping />        
    <AddDriver />
    <AddManager />
    <AddCurrency />
    <AddQuotes />
    <AddOrderForm />
   
    </>,
    document.getElementById('pup-up')
  )
}

export default ModelPupup