import React from 'react'
import TopBar from '../Restaurants-Components/bars/TopBar'
import CardUsers from '../Restaurants-Components/home/CardUsers'
import Charts from '../Restaurants-Components/home/Charts/Charts'
import WidgetsDrivers from '../Restaurants-Components/home/WidgetsDrivers'

const HomeRestaurant = ({ HandelShow }) => {


  return (
    <div className='lay-out-wrapp'>
      <TopBar title="الرئيسية" HandelShow={HandelShow} />
      <div className='style-flex-page row p-0'>
        <div className='main-card-users col-xs-12 col-lg-7 col-xl-8 col-xxl-9  '>
          <CardUsers />
          <Charts />
        </div>
        <WidgetsDrivers />
      </div>
    </div>
  )
}



export default HomeRestaurant