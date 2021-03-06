import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Link, useLocation } from "react-router-dom";
import BlackList from './BtnBlackList';
import Logo3 from "../../photo/slogan/user-avatar.svg"
import Logo1 from "../../photo/slogan/logo-rest.png"
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineAppstore } from 'react-icons/ai';
import { getClients2, SearchClients2, handleListView } from '../../store/ClintSlice2';
import ButtonReturn from '../glopal/ButtonReturn';
import ButtonAdd from './ButtonAdd';
import PaginateComponent from '../../Shared/Components/Paginate/Paginate';
import truncateText from '../../Shared/Services/Truncate';
import { useTranslation } from "react-i18next";
const TableAllUsers = ({ HandelShowCustomer }) => {
    const { t } = useTranslation();
    const location = useLocation();
    const dispatch = useDispatch()
    const statusBlackList = location.pathname.includes('black-list')

    const UserDataSelector = useSelector(state => state.clients2)
    const listView = useSelector(state => state.clients2.listView)

    const [clients2, setClients2] = useState([]);


    const [UserData, setUserData] = useState([])
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        if (statusBlackList) {
            const BlackList = clients2.filter(statusItem => statusItem.status == 0)
            setUserData(BlackList)
            setSortValue('')
        } else {
            setUserData(clients2)
            setSortValue('')
        }
    }, [clients2, statusBlackList])


    useEffect(() => {
        dispatch(getClients2(1))
    }, [dispatch])

    useEffect(() => {
        setClients2(UserDataSelector.clients2)
        console.log('useEffect');
    }, [UserDataSelector])




    const handlePageClick = (data) => {
        // setClients2([])
        console.log('handlePageClick', data.selected);
        dispatch(getClients2(data.selected + 1))
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

  /*  useEffect(() => {
        const search = () => {

            if (inputValue) {
                dispatch(SearchClients2(inputValue))
            } else {
                dispatch(getClients2(1))
            }
        }
        const debounceSearch = setTimeout(function () {
            search()
        }, 100)
        return () => {
            clearTimeout(debounceSearch)
        }
    }, [inputValue]);*/


    const dataRender = (
        <>
            {
                resultData.length == 0 ? <div><h3 className='text-center mt-5'>{t("messageRestaurants")}</h3></div>
                    : <>
                        {listView ?
                            <table>
                                <thead>
                                    <tr>
                                        <th>{t("logo")}</th>
                                        <th>#</th>
                                        <th>{t("en_name")}</th>
                                        <th>{t("telephone")}</th>
                                        <th>{t("email")}</th>
                                        <th>{t("address")}</th>
                                        <th>{t("status")}</th>
                                        <th>{t("shipping_company")}</th>
                                        <th>{t("options")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <>
                                        {resultData.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><Link className='my-2' to={`/admin/restaurants/${user.id}`}><img src={Logo3} alt="logo" /></Link></td>
                                                    <td>
                                                        <Link className='text-link' to={`/admin/restaurants/${user.id}`}>{user.id}#</Link>
                                                    </td>
                                                    <td>
                                                        <span>{user.en_name}</span>
                                                    </td>

                                                    <td>
                                                        <span>{user.mobile}</span>
                                                    </td>
                                                    <td>
                                                        <span>{user.email}</span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            {truncateText(user.address, 15)}
                                                        </span>
                                                    </td>

                                                    <td ><span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? t("active") : t("in_active") }</span></td>
                                                    <td className='position-relative'>
                                                        <Link className='text-primary' to={`/admin/shipping-companies/${user.id}`}>{user.en_name}</Link>
                                                        <div className="box-slide">
                                                            <span className="mark">?</span>
                                                            <div className="title">
                                                                <Link to={`/admin/shipping-companies/${user.id}`}><img src={Logo3} alt="logo" /></Link>
                                                            </div>
                                                            <div className="content mt-2">
                                                                <Link className='text-primary' to={`/admin/shipping-companies/${user.id}`}><h6>{user.en_name}</h6></Link>
                                                                <div>
                                                                    <a className='text-primary' href={`tel:+${user.mobile}`} >{user.mobile}</a>
                                                                </div>
                                                                <small>
                                                                    {user.address}
                                                                </small>

                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td >
                                                        <BiDotsHorizontalRounded className='BiDotsHorizontalRounded' />
                                                        <div className='select-clint'>
                                                            <Link to={`/admin/restaurants/${user.id}`}>????????????????</Link>
                                                            <Link to={`/admin/shipping-companies/${user.id}`}>???????? ??????????</Link>
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
                                                <Link to={`/admin/restaurants/${user.id}`} className='img-parent'>
                                                    <img src={Logo1} className="card-img-top" alt="..." />
                                                </Link>
                                                <div className="card-body text-center">
                                                    <h6 className="card-title mb-1">
                                                        <Link to={`/admin/restaurants/${user.id}`}>{user.en_name}</Link>
                                                    </h6>
                                                    <p className='mt-2'>
                                                        <a href={`tel:+${user.mobile}`}>{user.mobile}</a>
                                                    </p>
                                                    <div className='row actions-btns'>
                                                        <div className='col-3 p-0 actions-list'>
                                                            <span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="BiDotsHorizontalRounded" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                                                <div className='select-clint'>
                                                                    <Link to={`/admin/restaurants/${user.id}`}>????????????????</Link>
                                                                    <Link to={`/admin/shipping-companies/${user.user.id}`}>???????? ??????????</Link>
                                                                </div>
                                                            </span>
                                                        </div>
                                                        <div className='col-4 p-0 flex-center'>
                                                            <span className={user.status === 1 ? "green" : "red"}>{user.status === 1 ? t("active") : t("in_active") }</span>
                                                        </div>
                                                        <div className='col-5 p-0'>
                                                            <Link to={`/admin/restaurants/${user.id}`} className="btn btn-main">????????????????</Link>
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
                    <input type="search" placeholder={t("searchRestaurant")}
                        onChange={inputSearch} />
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


                {statusBlackList ? <ButtonReturn title='/admin/restaurants' />
                    : <ButtonAdd HandelShowCustomer={HandelShowCustomer} />}

            </div>

            <div className='gird-show'>
                {dataRender}

                <PaginateComponent pageCount={UserDataSelector.meta.total} handlePageClick={handlePageClick} />

                {/* <ReactPaginate
                    pageCount={UserDataSelector.meta.last_page}
                    previousLabel={<IoIosArrowForward />}
                    nextLabel={<IoIosArrowBack />}
                    breakLabel={<BiDotsHorizontalRounded />}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    activePageLinkClassName={"active"}
                    activeClassName={"active"}
                /> */}
            </div>

        </div>
    )
}



export default TableAllUsers