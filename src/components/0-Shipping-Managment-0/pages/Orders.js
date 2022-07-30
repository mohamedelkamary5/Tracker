import React, { useState } from 'react';
import styled from "styled-components";
import TopBar from './../Restaurants-Components//bars/TopBar';
import TabelOrders from '../Restaurants-Components/Orders/TabelAllOrders';


const Orders = ({ HandelShow, HandelShowCustomer }) => {
  const [searchSort, setSortSearch] = useState("")
  return (
    <div className='lay-out-wrapp'>
      <TopBar title={"الطلبات"} HandelShow={HandelShow} />
      <div className='style-flex-page'>
        <TabelOrders searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer} />

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
export default Orders