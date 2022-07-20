import React from 'react'
import styled from "styled-components"
import { MdPersonAddAlt } from 'react-icons/md';
import { addShipping ,AddManager, ShowAdd ,AddDriver ,AddCurrency, AddQuotes} from '../../store/StateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const ButtonsAdd = ({buttons,setbuttons}) => {

    const dispatch = useDispatch()
    const AddResturant = () =>{
        dispatch(ShowAdd(true))
        setbuttons(false)
    }
    const AddShipping = () =>{
        dispatch(addShipping(true))
        setbuttons(false)
    }
    const AddDrivers = () =>{
        dispatch(AddDriver(true))
        setbuttons(false)
    }
    const AddManagers = () =>{
        dispatch(AddManager(true))
        setbuttons(false)
    }
    const AddCurrencys = () =>{
        dispatch(AddCurrency(true))
        setbuttons(false)
    }
    const AddQuote = () =>{
        dispatch(AddQuotes(true))
        setbuttons(false)
    }
   const {t}= useTranslation()
  return (
    <StyleButtonAdd buttons={buttons}>

        <button onClick={AddResturant}><MdPersonAddAlt  /> {t("btnAddRestaurants")}</button>
        <button onClick={AddShipping}><MdPersonAddAlt /> {t("btnAddShipping")}</button>
        <button onClick={AddDrivers}><MdPersonAddAlt  /> {t("btnAddDriver")}</button>
        <button onClick={AddManagers}><MdPersonAddAlt /> {t("btnAddManagers")}</button>
        <button onClick={AddCurrencys}><MdPersonAddAlt />{t("btnAddCurrency")}</button>
        <button onClick={AddQuote}><MdPersonAddAlt /> {t("btnAddPackage")}</button>


       

    </StyleButtonAdd>
  )
}
const StyleButtonAdd = styled.div`
position: absolute;
top: 50px;
z-index: 50;
width: 250px;
height: 220px;
left: -25px;
background-color: white;
padding: 5px;
flex-direction: column;
align-items: center;
border-radius: 5px;
box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.56);
-webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);
-moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.86);
overflow: auto;
@media (max-width:767px) {
    left: 7px;
}
&::-webkit-scrollbar{
    width: 4px;
}
&::-webkit-scrollbar-thumb {
    background-color: var(--secound-color);
    border-radius: 10px;
}
&::-webkit-scrollbar-track {
	background: var(--primary-color);
}
display:  ${props => props.buttons ? "flex" : "none"};
button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 15px;
    background-color: var(--primary-color);
    width: 170px;
    color: white;
    margin: 7px 0;
    border-radius: 10px;
    transition: 0.5s;
    &:hover{
        opacity: 0.8;
    }
    svg{
        margin: 0 8px;
        font-size: 24px;
    }
}
`
export default ButtonsAdd