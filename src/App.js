import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
import React, { Fragment, useState, useEffect } from 'react'
import RequireAuth from './components/Auth/RequireAuth';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverLay from "./components/glopal/OverLay";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";

// Restaurants
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./components/Restaurants/RestaurantDetails/User";
// import RestaurantsBlackList from "./components/Restaurants/BlackList";


// Shipping
import Shipping from "./pages/Shipping";
import ShippingDetails from "./components/Shipping/ShippingDetails/User"


// Managers
import Managers from "./pages/Managers";
import ManagerDetails from "./components/Managers/ManagerDetails/User"
// import ManagersBlackList from "./components/Managers/BlackList";


// Drivers
import Drivers from "./pages/Drivers";
import DriverDetails from "./components/Drivers/DriverDetails/User";
// import DriverBlackList from "./components/Drivers/BlackList";


// Currencies
import Currencies from "./pages/Currencies";
import CurrencyDetails from "./components/Currency/CurrencyDetails/User";
// import CurrenciesBlackList from "./components/Currency/BlackList";


// Quotes
import Quotes from "./pages/Quotes";
import QuotesDetails from "./components/Quotes/QuotesDetails/User";
// import QuotesBlackList from "./components/Quotes/BlackList";


// Account
import MyAccount from "./pages/Account";
import EditMyAccount from "./components/MyAccount/EditMyAccoutn/EditUser";

// Account restaurent
import MyAccountRestaurant from "./components/Restaurants-Managment/pages/Account";
import EditMyAccountRestaurant from "./components/Restaurants-Managment/Restaurants-Components/MyAccount/EditMyAccoutn/EditUser";
// divers restaurant
import DriversRestaurant from "./components/Restaurants-Managment/pages/Drivers";

// import EditUser from "./components/clint copy/EditUser";
import './styles/glopal-style.scss'
import Setting from "./pages/Setting";
import SidebarLayout from "./components/bars/NotBar";
import ProtectedRoutesAdmin, { ProtectedRoutesRestaurant, ProtectedRoutesShipping } from "./components/Auth/ProtectedRoutes";
import PreLoader from "./Shared/Components/PreLoader/PreLoader";
// import LoginRestaurant from "./components/Restaurants-Managment/pages/Login";
import HomeRestaurant from "./components/Restaurants-Managment/pages/Home";
import SidebarLayoutRestaurant from "./components/Restaurants-Managment/Restaurants-Components/bars/NotBar";
import Orders from "./components/Restaurants-Managment/pages/Orders";
import OrderDetails from "./components/Restaurants-Managment/Restaurants-Components/Orders/OrderDetails/User";

import ModelPupup from "./components/Model/ModelPupup";
// import PrecedentClint from "./components/clint copy/PrecedentClint";
function App() {
  const [showBar, setShowBar] = useState(false) //side par
  const [show, setShow] = useState(false) // added clint massige
  const [loader, setLoader] = useState(true);

  const HandelShow = () => {
    setShowBar(!showBar)

  }

  const HandelClose = () => {
    setShowBar(false)
    setShow(false)
  }




  // const ROLES = {
  //   'User': 2001,
  //   'Editor': 1984,
  //   'Admin': 5150
  // }

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 100);
  }, []);

  return (
    <Fragment>
      {loader && <PreLoader />}
      <StyleApp>
        <BrowserRouter>
          {/* public sliders */}
          <ModelPupup />
          <Routes>
            {/* Start Routes Admin */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/register" element={<Register />} />
            {/*------------*/}
            <Route element={<ProtectedRoutesAdmin />}>
              <Route element={<SidebarLayout HandelShow={HandelShow} show={show} />}>

                <Route path="/admin" element={<Home HandelShow={HandelShow} />} />
                <Route path="admin/Triple-zero" element={<Home HandelShow={HandelShow} />} />
                <Route path="admin/setting" element={<Setting />} />

                {/* Start Restaurants Routes */}
                <Route path="admin/restaurants">
                  <Route path="" element={<Restaurants
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path="black-list" element={<Restaurants
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":restaurantId" element={<RestaurantDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  {/* <Route path="black-list" element={<RestaurantsBlackList
    HandelShow={HandelShow}
    showBar={showBar}
    HandelClose={HandelClose}
    show={show}
    setShow={setShow}
  />} /> */}
                </Route>
                {/* End Restaurants Routes */}

                {/* Start shipping Routes */}
                <Route path="admin/shipping-companies">
                  <Route path="" element={<Shipping
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path="black-list" element={<Shipping
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":shippingId" element={<ShippingDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                </Route>
                {/* End shipping Routes */}

                {/* Start Managers Routes */}
                <Route path="admin/managers">
                  <Route path="" element={<Managers
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path="black-list" element={<Managers
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":managerId" element={<ManagerDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                </Route>
                {/* End Managers Routes */}

                {/* Start Drivers Routes */}
                <Route path="admin/drivers">
                  <Route path="" element={<Drivers
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path="black-list" element={<Drivers
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":driverId" element={<DriverDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                </Route>
                {/* End Drivers Routes */}

                {/* Start Currencies Routes */}
                <Route path="admin/currencies">
                  <Route path="" element={<Currencies
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path="black-list" element={<Currencies
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":currencyId" element={<CurrencyDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                </Route>
                {/* End Currencies Routes */}

                {/* Start Quotes Routes */}
                <Route path="admin/quotes">
                  <Route path="" element={<Quotes
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path="black-list" element={<Quotes
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow}
                  />} />
                  <Route path=":quotesId" element={<QuotesDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                </Route>
                {/* End Quotes Routes */}

                {/* My Account */}
                <Route path="admin/my-account">
                  <Route path="" element={<MyAccount
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="edit" element={<EditMyAccount HandelShow={HandelShow} />} />
                </Route>
              </Route>
              {/* End    Routes Admin */}




              {/* My Account */}
              <Route path="admin/my-account">
                <Route path="" element={<MyAccount
                  HandelShow={HandelShow}
                  HandelClose={HandelClose} />}
                />
                <Route path="edit" element={<EditMyAccount HandelShow={HandelShow} />} />
              </Route>
            </Route>
            {/* End Routes Admin */}


            {/* Start Routes Restaurant */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/login" element={<LoginRestaurant />} /> */}
            <Route element={<ProtectedRoutesRestaurant />}>
              <Route element={<SidebarLayoutRestaurant HandelShow={HandelShow} show={show} />}>
                <Route path="/Triple-zero" element={<HomeRestaurant />} />
                <Route path="/" element={<HomeRestaurant />} />
                {/* Start Route orders */}
                <Route path="/orders" >
                  <Route path="" element={<Orders />}
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow} >
                  </Route>

                  <Route path=":orderId" element={<OrderDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />

                </Route>
                {/* Start Route Drivers  */}
                <Route path="drivers" element={<DriversRestaurant />}> </Route>
                <Route path="drivers/black-list" element={<DriversRestaurant />}> </Route>

                {/* My Account */}
                <Route path="/my-account">
                  <Route path="" element={<MyAccountRestaurant
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="edit" element={<EditMyAccountRestaurant HandelShow={HandelShow} />} />
                </Route>

              </Route>
            </Route>
            {/* End Routes Restaurant */}

            {/* Start Routes shipping */}
            <Route path="/shipping/login" element={<Login />} />
            <Route element={<ProtectedRoutesShipping />}>
              <Route element={<SidebarLayoutRestaurant HandelShow={HandelShow} show={show} />}>
                <Route path="/shipping" element={<HomeRestaurant />} />
                {/* Start Route orders */}
                <Route path="/shipping/orders" >
                  <Route path="" element={<Orders />}
                    HandelShow={HandelShow}
                    showBar={showBar}
                    HandelClose={HandelClose}
                    show={show}
                    setShow={setShow} >
                  </Route>

                  <Route path=":orderId" element={<OrderDetails
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />

                </Route>
                {/* Start Route Drivers  */}
                <Route path="/shipping/drivers" element={<DriversRestaurant />}> </Route>

                {/* My Account */}
                <Route path="/shipping/my-account">
                  <Route path="" element={<MyAccountRestaurant
                    HandelShow={HandelShow}
                    HandelClose={HandelClose} />}
                  />
                  <Route path="edit" element={<EditMyAccountRestaurant HandelShow={HandelShow} />} />
                </Route>

              </Route>
            </Route>
            {/* End Routes shipping */}


          </Routes>
        </BrowserRouter>
      </StyleApp>
    </Fragment>

  );
}
const StyleApp = styled.div`
display: flex;
width: 100%;

`
export default App;
