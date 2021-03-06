import React, { useState ,useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
// import AddDrivers from '../components/drivers/AddDrivers'
import TabelDrivers from '../components/Drivers/TabelAllUsers'
import { getShipping } from '../store/ShippingSlice'
import {MarginPages} from '../styles/MarginPages'

const Drivers = ({HandelShow ,HandelShowCustomer }) => {
  const [searchSort , setSortSearch] = useState("") 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShipping())
    
}, [dispatch ])
//translate
const { t , i18n } = useTranslation();

  return (
    <div className='lay-out-wrapp'>
    <TopBar title={t("drivers")} HandelShow={HandelShow} />
    <div className='style-flex-page'>
        <TabelDrivers searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer} />
        
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
export default Drivers