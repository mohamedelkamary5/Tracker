import React , {useState ,useEffect} from 'react'
import styled from "styled-components"
import TopBar from '../components/bars/TopBar'
// import ClintForm from '../components/Restaurants/AddForm'
import TabelAllUsers from '../components/Restaurants/TabelAllUsers'
// import GlopalTabel from '../components/glopal/GlopalTabel'
import {MarginPages} from '../styles/MarginPages'
import { useSelector, useDispatch } from 'react-redux'

const Restaurants = ({HandelShow ,HandelShowCustomer ,showCustomer ,HandelClose ,show,setShow }
  
  ) => {

  //sort search
  const [searchSort , setSortSearch] = useState("") 
  const UserData = useSelector((state) => state.clint.DataUser)

  return (
    <div className='lay-out-wrapp'>
        <TopBar title={"المطاعم"} HandelShow={HandelShow} />
        
        <TabelAllUsers searchSort={searchSort} setSortSearch={setSortSearch} HandelShowCustomer={HandelShowCustomer}  />
        
    </div>
  )
}

const StyleFlex = styled.div`

`
export default Restaurants