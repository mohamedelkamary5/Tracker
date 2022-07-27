import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
// import ClintForm from '../components/Restaurants/AddForm'
import TabelAllUsers from '../components/Restaurants/TabelAllUsers'
// import GlopalTabel from '../components/glopal/GlopalTabel'
import {MarginPages} from '../styles/MarginPages'
import { useSelector, useDispatch } from 'react-redux'
import { getShipping } from '../store/ShippingSlice'
import { useTranslation } from "react-i18next";


const Restaurants = ({HandelShow ,HandelShowCustomer  }
  
  ) => {

  //sort search
  const [searchSort , setSortSearch] = useState("") 
  const UserData = useSelector((state) => state.clint.DataUser)
  //use effect select shipping
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShipping())
    
}, [dispatch ])
  //translate
  const { t , i18n } = useTranslation();

  return (
    <div className='lay-out-wrapp'>
        <TopBar title={t("restaurants")} HandelShow={HandelShow} />
        
        <TabelAllUsers searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer}  />
        
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
export default Restaurants