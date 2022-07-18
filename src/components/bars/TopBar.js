import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"
import LoginManager from "./loginManager"
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAddBox } from 'react-icons/md';
import { BsArrowClockwise } from 'react-icons/bs';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import { BsTextParagraph } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { getClients2, SearchClients2 } from '../../store/ClintSlice2';
import { Link } from "react-router-dom";
import ButtonsAdd from './ButtonsAdd';
import { ShowNav } from '../../store/StateSlice';
import swal from 'sweetalert';
import { useTranslation } from "react-i18next";


const TopBar = ({ title }) => {
    //show navBar 
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()


    // adds button
    const [buttons, setbuttons] = useState(false)
    const [loading, setLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const HandelToggleBar = () => {
        dispatch(ShowNav())
    }

    const HandelButton = () => {
        setbuttons(!buttons)
    }
    const UserData = useSelector((state) => state.clients2.clients2)
    //filter search 
    const [filterSearch, setfilterSearch] = useState([])
    const [valueInput, setValueInput] = useState([])
    const [showSearch, setShowSearch] = useState(false);
    const [textResultSearch, setTextResultSearch] = useState('ادخل اسم العميل');

    useEffect(() => {
        setfilterSearch(UserData)
    }, [UserData]);

    useEffect(() => {
        const search = () => {

            if (valueInput) {
                dispatch(SearchClients2(valueInput))
                    .unwrap()
                    .then(() => { })
                    .catch(err => {
                        setfilterSearch([])
                        setTextResultSearch('لا يوجد نتائج بحث')

                    })
                console.log('term1', valueInput);
            } else {
                // setResult([])
                dispatch(getClients2(1))
                console.log('emit');
            }

        }
        // setShowSearch(true)
        const debounceSearch = setTimeout(function () {
            search()

        }, 0)

        return () => {
            clearTimeout(debounceSearch)
        }

    }, [valueInput]);



    const handelLink = () => {
        setfilterSearch([])
    }

    const refrechRestaurants = () => {
        setLoading(true)
        dispatch(getClients2(1))
            .unwrap()
            .then(() => {
                swal("تم تنفيذ الامر بنجاح", {
                    icon: "success",
                    button: 'موافق',
                });
                setLoading(false)
            }).catch(() => {
                swal("عفوا لم يتم تنفيذ الامر", {
                    icon: "error",
                    button: 'موافق'
                });
                setLoading(false)
            })
    }

    const handelFocus = () => {
        setShowSearch(true)
    }
    const handelBlue = () => {
        setTimeout(() => {
            setShowSearch(false)
            // setInputValue('')
        }, 200)
    }

    const handelChange = ({ target }) => {
        setValueInput(target.value)
    }

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };


    return (
        <StyleTopBar>
            <StyleRightTopBar>
                <div className='title-page'><h2>{title}</h2></div>
                <div className='search'>
                    <input type="search" placeholder='أبحث عن اسم العميل' onFocus={handelFocus} onBlur={handelBlue} value={valueInput} onChange={handelChange} />
                    {/* <input type="search" placeholder='أبحث عن اسم العميل' onFocus={handelFocus} onBlur={handelBlue} value={inputValue} onChange={handelChange} /> */}
                    <AiOutlineSearch className='icon-search' />
                    {/* <div className='filter-Search'> */}
                    {showSearch ?
                        <div className='filter-Search'>
                            {
                                filterSearch.length != 0 ? <>
                                    {
                                        filterSearch.map((item, index) => {
                                            return (
                                                <div className='click-Search' key={index}>
                                                    <Link to={`/admin/restaurants/${item.id}`} onClick={handelLink}><p>{item.en_name}</p> </Link>
                                                </div>

                                            )
                                        })}

                                </>
                                    : <h6 className='text-center py-2'>
                                        {textResultSearch}
                                    </h6>
                            }
                        </div>
                        : null}
                    {/* </div> */}
                </div>

                <div className='icons-topbar'>
                    <button onClick={refrechRestaurants} disabled={loading ? true : false}>
                        {
                            !loading ? <BsArrowClockwise className='icon-topbar' /> : <i className="fa fa-spinner fa-spin" style={{ fontSize: 24, width: 40, display: 'inline-block' }} />
                        }



                    </button>
                    <MdAddBox className='icon-topbar' onClick={HandelButton} />
                    <ButtonsAdd buttons={buttons} setbuttons={setbuttons} />

                    {i18n.language == "ar" && <button className='btn-lang' onClick={() => changeLanguage("en-US")}> عربي </button>}
                    {i18n.language == "en-US" && <button className='btn-lang' onClick={() => changeLanguage("ar")}> English </button>}

                </div>

            </StyleRightTopBar>
            <StyleLeftTopBar>
                <LoginManager />
                <BsTextParagraph className='icon-topbar' onClick={HandelToggleBar} />
            </StyleLeftTopBar>

        </StyleTopBar>
    )
}
const StyleTopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:1114px) {
flex-direction: column;
justify-content: center;

}
.btn-lang{
    padding: 0px 10px;
    background: #FBA30D;
    color: white;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    margin: 0 10px;
}
`
const StyleRightTopBar = styled.div`
display: flex;
align-items: center;

.title-page h2{
    font-weight:bold ;
    font-size: 32px;
    padding-left: 25px;
    @media (max-width:460px) {  
        font-size: 19px;
    }
    @media (max-width:368px) {
        font-size: 16px;
    }
}
.search {
position: relative;
margin-left: 20px;

    input{
        all:unset ;
        background-color: var(--white-color);
        padding: 7px 50px 7px 15px;
        width: 750px;
        
        border-radius: 7px;
       
        &::placeholder{
            color: var(--font);
            @media (max-width:460px) {  
            width: 100px;
            font-size: 12px;
        }
        }
        @media (max-width:1610px) {
            width: 550px;
        }
        @media (max-width:1410px) {
            width: 350px;
        }
        @media (max-width:1220px) {
            width: 250px;
        }
        @media (max-width:1115px) {
            width: 150px;
        }
        @media (max-width:460px) {  
            width: 100px;
        }
        @media (max-width:368px) {
            width: 90px;
    }
    }
    .icon-search{
        position: absolute;
        right: 9px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 26px;
        color: var(--font);
        cursor: pointer;

    }
}
.icons-topbar{
    position: relative;
    display: flex;
    cursor: pointer;
    .icon-topbar{
        font-size: 30px;
        margin: 0 5px;
        @media (max-width:375px) {
            font-size: 24px;
            margin: 0 2px;
    }
    }

}
.filter-Search{
    position: absolute;
    background-color: white;
    width: 100%;
    z-index: 10;
    border-radius:0 0px 10px 10px;
    box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.46);
    -webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.40);
    -moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);
    max-height: 270px;
    overflow: auto;
    padding: 4px 0;
    .click-Search{
        transition: 0.2s;
        :hover{
                background-color: var(--background-color);
                
            }
        a{
            color: black;
            display: block;
            padding: 2px 20px;


        }
    }


}
`

const StyleLeftTopBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.icon-topbar{
    z-index: 10;
    font-size: 35px;
    width: 40px;
    margin: 10px;
    cursor: pointer;
    display: none;
    @media (max-width: 1180px) {
        display:block
}
}
`
export default TopBar