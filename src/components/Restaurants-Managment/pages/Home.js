import React from 'react'
import styled from "styled-components"
import TopBar from '../Restaurants-Components/bars/TopBar'

const HomeRestaurant = ({ HandelShow }) => {


  return (
    <div className='lay-out-wrapp'>
      <TopBar title="الرئيسية" HandelShow={HandelShow} />
      <div className='style-flex-page'>
      </div>
    </div>
  )
}

const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
@media (max-width:910px) {
  flex-direction: column;
}
`
export default HomeRestaurant