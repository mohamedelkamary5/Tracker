import React, {useEffect} from 'react';
import styled from "styled-components";
import TopBar from '../../bars/TopBar';
import {MarginPages} from '../../../styles/MarginPages';
import ClintInformation from './Information';
import { useSelector, useDispatch } from 'react-redux';
import { getManagerDetails } from '../../../store/ManagersSlice';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';


const Clint = ({HandelShow }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  let { managerId } = useParams();
  useEffect(() => {
    dispatch(getManagerDetails(managerId))
  }, [getManagerDetails])

  //TODO: clientDetails
  const clientDetails = useSelector(state => state.managers.ManagerDetails)
  return (
    <div className='lay-out-wrapp'>
    <TopBar title={t("manager")} HandelShow={HandelShow} />
    
    <div className='style-flex-page'>
     <ClintInformation clientDetails={clientDetails}  />
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