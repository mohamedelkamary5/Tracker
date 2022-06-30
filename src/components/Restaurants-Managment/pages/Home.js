import React from 'react'
import TopBar from '../Restaurants-Components/bars/TopBar'
import CardUsers from '../Restaurants-Components/home/CardUsers'
import WidgetsDrivers from '../Restaurants-Components/home/WidgetsDrivers'

const HomeRestaurant = ({ HandelShow }) => {


  return (
    <div className='lay-out-wrapp'>
      <TopBar title="الرئيسية" HandelShow={HandelShow} />
      <div className='style-flex-page row p-0'>
        <CardUsers />
        <WidgetsDrivers />
      </div>
    </div>
  )
}



export default HomeRestaurant