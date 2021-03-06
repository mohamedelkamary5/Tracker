import React, { useEffect } from 'react';
import styled from "styled-components";
import TopBar from '../../bars/TopBar';
import { MarginPages } from '../../../styles/MarginPages';
import ClintInformation from './Information';
import { useSelector, useDispatch } from 'react-redux';
import { getShippingDetails } from '../../../store/ShippingSlice';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';


const Clint = ({ HandelShow }) => {
  const dispatch = useDispatch()
  let { shippingId } = useParams();
  const {t} = useTranslation()
  useEffect(() => {
    dispatch(getShippingDetails(shippingId))
  }, [getShippingDetails])

  //TODO: clientDetails
  const clientDetails = useSelector(state => state.shipping.ShippingDetailsDetails)
  return (
    <div className='lay-out-wrapp'>
      <TopBar title={t("shipping_company")} HandelShow={HandelShow} />

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
export default Clint