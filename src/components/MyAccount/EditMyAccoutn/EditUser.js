import React, { useEffect } from 'react'
import styled from "styled-components"
import { MarginPages } from '../../../styles/MarginPages'
import TopBar from '../../bars/TopBar'
import FormEdit from './FormEdit'
import PrecedentClint from './PrecedentClint'

const EditUser = ({ HandelShow }) => {

  const dataMyAccount = JSON.parse(localStorage.getItem('authDataAdmin')).user


  return (

    <StyleEdit>
      <div className='lay-out-wrapp'>
        <TopBar title={"تعديل"} HandelShow={HandelShow} />
        <PageEdit>
          <PrecedentClint dataMyAccount={dataMyAccount} />
          <FormEdit dataMyAccount={dataMyAccount} />
        </PageEdit>
      </div>
    </StyleEdit>
  )
}
const StyleEdit = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
@media (max-width:910px) {
  flex-direction: column;
}

`
const PageEdit = styled.div`
display: flex;
justify-content: space-between;
margin: 50px;
background-color: white;
// height: 75vh;
@media (max-width:950px) {
    flex-direction: column;
    height: 100%;
    margin: 10px 10px 0 10px;
}

`
export default EditUser