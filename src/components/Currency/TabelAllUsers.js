import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from "react-router-dom";
import BlackList from './BtnBlackList';
import Logo3 from "../../photo/slogan/user-avatar.svg"
import Logo1 from "../../photo/slogan/logo-rest.png"
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { getCurrency, searchCurrency, handleListView } from '../../store/CurrencySlice';
import ButtonReturn from '../glopal/ButtonReturn';
import ButtonAdd from './ButtonAdd';
import ReactPaginate from "react-paginate";
import PaginateComponent from '../../Shared/Components/Paginate/Paginate'; 
import { useTranslation } from "react-i18next";
const TableAllUsers = ({ HandelShowCustomer }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const dispatch = useDispatch()
    const statusBlackList = location.pathname.includes('black-list')

    const UserDataSelector = useSelector(state => state.currency)
    const listView = useSelector(state => state.currency.listView)


    const [UserData, setUserData] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (statusBlackList) {
            const BlackList = UserDataSelector.currencies.filter(statusItem => statusItem.status == 0)
            setUserData(BlackList)
            setSortValue('')
        } else {
            setUserData(UserDataSelector.currencies)
            setSortValue('')
        }
    }, [UserDataSelector.currencies, statusBlackList])


    useEffect(() => {
        dispatch(getCurrency(1))
    }, [dispatch])

    const handlePageClick = (data) => {
        console.log('handlePageClick', data.selected);
        dispatch(getCurrency(data.selected + 1))
    }



    const [resultData, setResultData] = useState([])
    const [sortValue, setSortValue] = useState('')

    // perPage: 10,
    //     currentPage: 0





    const sortingItems = [
        { id: 1, name: 'id', title: '#' },
        { id: 2, name: 'en_name', title: t("sortName") },
        { id: 3, name: 'mobile', title: t("sortNumber")},
        { id: 4, name: 'email', title: t("sortEmail")},
        { id: 5, name: 'status', title: t("sortState")},
    ]

    const inputSearch = (e) => {

        if (e.target.value == '') {
            setResultData(UserData)
        } else {
            const searchString = e.target.value.toLowerCase();
            const filteredItems = UserData.filter((item) => {
                return item.en_name.toLowerCase().includes(searchString);
            });
            setResultData(filteredItems)
        }


    }

    const handleSort = (e) => {
        setResultData([...resultData].sort((a, b) => a[e] < b[e] ? 1 : -1))
        setSortValue(e)
    }

    useEffect(() => {
        setResultData(UserData)
    }, [UserData])

    const handelChange = ({ target }) => {
        setInputValue(target.value)
    }

    useEffect(() => {
        const search = () => {

            if (inputValue) {
                dispatch(searchCurrency(inputValue))
            } else {
                dispatch(getCurrency(1))
            }
        }
        const debounceSearch = setTimeout(function () {
            search()
        }, 500)
        return () => {
            clearTimeout(debounceSearch)
        }
    }, [inputValue]);




    const dataRender = (
        <>
            {
                resultData.length == 0 ? <div><h3 className='text-center mt-5'>لا يوجد عملات</h3></div>
                    : <>
                        {listView ?
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>الأسم بالانجليزي </th>
                                        <th>رمز العمله </th>
                                        <th>سعر الصرف </th>
                                        <th>تسلسل </th>
                                        <th>الحالة </th>
                                        <th>الخيارات </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <>
                                        {resultData.map((user, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td>
                                                        <Link className='text-link' to={`/admin/currencies/${user.id}`}>{user.id}#</Link>
                                                    </td>
                                                    <td>
                                                        <span>{user.en_title}</span>
                                                    </td>


                                                    <td>
                                                        <span>{user.symbol}</span>
                                                    </td>
                                                    <td>
                                                        <span>{user.exchange_rate}</span>
                                                    </td>
                                                    <td ><span >{user.sequence}</span></td>
                                                    <td ><span className={user.status === 1 ? "green my-2 d-inline-block" : "red my-2 d-inline-block"}>{user.status == 1 ? t("active") : t("in_active")}</span></td>


                                                    <td >
                                                        <BiDotsHorizontalRounded className='BiDotsHorizontalRounded' />
                                                        <div className='select-clint'>
                                                            <Link to={`currencies/${user.id}`}> التفاصيل</Link>
                                                            <Link to={`currencies/${user.id}`}>بيانات العميل</Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </>
                                </tbody>
                            </table>
                            :
                            <div className='row mt-2'>
                                {resultData.map((user, index) => {
                                    return (
                                        <div className='col-lg-3 mt-3'>
                                            <div className="card">
                                                <Link to={`/admin/currencies/${user.id}`} className='img-parent'>
                                                    <img src={Logo1} className="card-img-top" alt="..." />
                                                </Link>
                                                <div className="card-body text-center">
                                                    <h6 className="card-title mb-1">
                                                        <Link to={`/admin/currencies/${user.id}`}>{user.en_title}</Link>
                                                    </h6>
                                                    <p className='mt-2'>
                                                        <span>{user.symbol}</span>
                                                    </p>
                                                    <div className='row actions-btns'>
                                                        <div className='col-3 p-0 actions-list'>
                                                            <span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="BiDotsHorizontalRounded" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                                                <div className='select-clint'>
                                                                    <Link to={`/admin/currencies/${user.id}`}>التفاصيل</Link>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className='col-4 p-0 flex-center'>
                                                            <span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? t("active") : t("in_active")}</span>
                                                        </div>
                                                        <div className='col-5 p-0'>
                                                            <Link to={`/admin/currencies/${user.id}`} className="btn btn-main">التفاصيل</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}

                    </>
            }
        </>
    )

    return (
        <div className="main-table">

            <div className='style-main-sort'>
                {statusBlackList ? null : <BlackList />}

                <div className='style-icons-sort'>
                    <AiOutlineBars className={`sort-icon ${listView ? 'active' : ''}`} onClick={() => dispatch(handleListView(true))} />
                    <AiOutlineAppstore className={`sort-icon ${!listView ? 'active' : ''}`} onClick={() => dispatch(handleListView(false))} />
                </div>

                <form className='form-search'>
                    <input type="search" placeholder={t("searchCurrencies")}
                        onChange={handelChange} />
                    <AiOutlineSearch className='icon-search' />
                </form>

                <div className='sort-by'>

                    <p> {t("sort_by")} : </p>
                    {sortingItems.map(item => {
                        return (
                            <div className='main-sort' key={item.id}>
                                <span className={item.name == sortValue ? 'active' : ''} onClick={() => handleSort(item.name)}>{item.title}</span>
                            </div>
                        )
                    })}
                </div>


                {statusBlackList ? <ButtonReturn title='/currencies' />
                    : <ButtonAdd HandelShowCustomer={HandelShowCustomer} />}

            </div>

            <div className='gird-show'>
                {dataRender}

                <PaginateComponent pageCount={UserDataSelector.meta.total} handlePageClick={handlePageClick} />

            </div>

        </div>
    )
}



export default TableAllUsers