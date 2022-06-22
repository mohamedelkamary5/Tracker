import React from 'react'
import TopBar from '../Restaurants-Components/bars/TopBar'
import CardUsers from '../Restaurants-Components/home/CardUsers'

const HomeRestaurant = ({ HandelShow }) => {


  return (
    <div className='lay-out-wrapp'>
      <TopBar title="الرئيسية" HandelShow={HandelShow} />
      <div className='style-flex-page'>
        <CardUsers />
      </div>
    </div>
  )
}



export default HomeRestaurant