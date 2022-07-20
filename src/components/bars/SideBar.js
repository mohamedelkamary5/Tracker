import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import logo from "../../photo/glopal/logo.svg"
import logout from "../../photo/icons/logout.svg"
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { MdOutlineSettings } from 'react-icons/md';
import { MdSupervisorAccount } from 'react-icons/md';
import { MdDirectionsCar } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FiPackage } from 'react-icons/fi';
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from 'react-redux';
import { HideSlider } from '../../store/StateSlice';


const SideBar = ({ showBar, HandelClose }) => {
    const toogleslider = useSelector((state) => state.ShowAndHide.value.nav)
    const dispatch = useDispatch()
    let location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/admin/login";
    const { t , i18n } = useTranslation();
    const language = i18n.language
    const initalNavBar = [
        {
            id: 1,
            name: t("home"),
            link: "/admin/Triple-zero",
            icon: AiOutlineAppstore,

        },
        {
            id: 2,
            name: t("restaurants"),
            link: "/admin/restaurants",
            icon: MdSupervisorAccount,

        },
        {
            id: 8,
            name: t("managers"),
            link: "/admin/managers",
            icon: BsPerson,

        },
        {
            id: 3,
            name: t("shipping"),
            link: "/admin/shipping-companies",
            icon: FaShoppingCart,

        },
        {
            id: 6,
            name: t("drivers"),
            link: "/admin/drivers",
            icon: MdDirectionsCar,

        },
        {
            id: 7,
            name: t("currencies"),
            link: "/admin/currencies",
            icon: HiCurrencyDollar,

        },
        {
            id: 11,
            name: t("packages"),
            link: "/admin/quotes",
            icon: FiPackage,

        },
        {
            id: 9,
            name: t("my_account"),
            link: "/admin/my-account",
            icon: BsPersonCircle,

        },
        {
            id: 10,
            name: t("setting"),
            link: "/admin/setting",
            icon: MdOutlineSettings,

        },
    ]
    
    const [stateNav, setStateNav] = useState({
        activeNav: null,
        NavBar: initalNavBar
    })

    useEffect(() => {
        setStateNav({ ...stateNav, NavBar: initalNavBar })
    }, [t]);


    //start Active Class and state sort
    useEffect(() => {
        setStateNav(
            { ...stateNav, activeSort: stateNav.NavBar[0] }
        )
    }, [setStateNav])

    const HandelIndex = (index, item) => {
        setStateNav(
            { ...stateNav, activeSort: stateNav.NavBar[index] }
        )
        // //start Active Class and state sort

        dispatch(HideSlider())


    }
    const HandelClassName = (index) => {
        if (stateNav.NavBar[index] == stateNav.activeSort) {
            return "item-widget"
        } else {
            return "item-widget"
        }
    }
    //end Active Class


    const logOut = () => {
        localStorage.removeItem('tokenAdmin')
        localStorage.removeItem("loggedInAdmin")
        localStorage.removeItem('authDataAdmin')
        // window.location.hostname('/login')
        navigate(from, { replace: true });
    }

  

    return (

        <StyleSideBar toogleslider={toogleslider} language={language}   >
            <StyleTop >
                <div className='img-logo'>
                    <NavLink to="/Triple-zero"><img src={logo} /></NavLink>
                </div>
                <div className='widget'>
                    <ul >
                        {stateNav.NavBar.map((item, index) => {
                            return (
                                <NavLink key={item.id} to={item.link}   >
                                    <div className={HandelClassName(index)} onClick={() => HandelIndex(index)} >
                                        <item.icon className='icon-name' />
                                        <li>{item.name}</li>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </ul>
                </div>
            </StyleTop>
            <Stylebutton>
                <button onClick={logOut}>
                    <img src={logout} />
                    <span>{t("signOut")}</span>
                </button>
            </Stylebutton>
        </StyleSideBar>

    )
}
// style StyleSideBar--

const transformAr = (props) => props.toogleslider ? 'translateX(0)' : 'translateX(290px)';
const transformEn = (props) => props.toogleslider ? 'translateX(0)' : 'translateX(-290px)';
const StyleSideBar = styled.div`
position: fixed;
// right: 0;
top: 0;
bottom: 0;
display: flex;
flex-direction: column;
justify-content:space-between;
padding: 20px 0;
align-items: center;
width: 240px;
z-index: 100;
transition: 0.7s;
background-color: var(--secound-color);
color: white;
overflow: hidden;
-webkit-box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
-moz-box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
box-shadow: -4px 5px 24px -13px rgba(105,105,105,1);
@media (max-width:1180px ) {
    transform: ${(props) => props.language == 'en' ? transformAr : transformEn };
}


`
    // ${language == "en" }

const StyleTop = styled.div`
//logo 
.img-logo{
display:flex ;
justify-content: center;
align-items: center;
position: relative;
flex-direction: column;
img{
transition: 0.7s; 
}
span img{
    width: 5px;
}
}
//ul icon 
.widget{
    margin-top: 50px;
    transition:0.7s;
    display: flex;
    justify-content: center;
     .item-widget{
        display: flex;
        align-items: center;
        width: 250px;
        cursor: pointer;
        margin: 6px 0;
        transition: 0.6s;
        padding: 8px 35px ;
        .icon-name{
           font-size:28px;
           transition: 0.4s;
        }
        @media (max-width:767px) {
            padding: 3px 40px ;
        } 
        &:hover{
            background-color:  var(--background-opacity) ;
            li{
                color: var(--primary-color);
            }
            .icon-name {
                color: var(--primary-color);
            }
        }
    }
    .active{
        background-color:  var(--background-opacity) !important ; 
        li{
                color: var(--primary-color);
            }
            .icon-name {
                color: var(--primary-color);
            }
        }
        

    
    ul a{
        color: white;

    }
    ul li{
        transition: 0.6s;
        font-size: 17px;
        margin: 0 10px; 
        @media (max-width:767px) {
            font-size: 15px;
        } 
    }
}

`

const Stylebutton = styled.div`
display: flex;
padding: 15px;
margin-bottom: 52px;
cursor: pointer;
span{
    padding: 0 15px;
    color: white;
    font-size: 18px;
}
`
export default SideBar