import React, { useEffect } from 'react';
import styled from "styled-components";
import TopBar from '../../bars/TopBar';
import ClintInformation from './Information';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdreDetails } from '../../../../../store/Restaurants-Managment/OrdersRestauantsSlice';
import { useParams } from 'react-router';


const OrderDetails = ({ HandelShow }) => {
  const dispatch = useDispatch()
  let { orderId } = useParams();
  useEffect(() => {
    dispatch(getOrdreDetails(orderId))
  }, [getOrdreDetails])

  const clientDetails = useSelector(state => state.ordersRestauants.orderDetails)

  return (
    <div className='lay-out-wrapp'>
      <TopBar title={"الطلب"} HandelShow={HandelShow} />

      <div className='style-flex-page'>
        <ClintInformation clientDetails={clientDetails} />
      </div>

    </div>

  )
}

const StyleFlex = styled.div`
display: flex;
justify-content: space-between;
margin-top: 33px;
width: 100%;
border: 1px solid var(--background-opacity);
border-radius: 40px;
@media (max-width:910px) {
  flex-direction: column;
  margin-top: 13px;
}
`
export default OrderDetails