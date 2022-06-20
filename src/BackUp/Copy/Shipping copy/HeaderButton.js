import React, { useState, Fragment } from 'react'
import styled from "styled-components"
import { FiPause } from 'react-icons/fi';
import { GrPlay } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import swal from 'sweetalert';
import ButtonReturn from '../glopal/ButtonReturn';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { ShowStop } from '../../store/StateSlice';
import { ShowDelete } from '../../store/StateSlice';
import {changeStatusShipping, deleteShipping} from '../../store/ShippingSlice'





const HeaderButton = ({HandelShowCustomer, id, status }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/shipping-companies";


    const clientDetails = useSelector(state => state.shipping.ShippingDetailsDetails)
    
    
    const statusVal = clientDetails.status == 1 ? true : false;
    
    const [handelStatus, setHandelStatus] = useState(statusVal);
    // console.log('statusVal', statusVal);

    const handelStatusClient = () => {


        const text = handelStatus ? 'من ايقاف هذا العميل' : 'من اعادة تشغيل هذا العميل'

        swal({
                title: 'هل أنت واثق؟',
                text: text,
                icon: "warning",
                buttons: {
                    cancel: "الغاء",
                    catch: {
                        text: "موافق",
                        value: "catch",
                    },
                },
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(changeStatusShipping(id))
                    .unwrap()
                    .then((res) => {
                        setHandelStatus(!handelStatus)
                        swal("تم تنفيذ الامر بنجاح", {
                            icon: "success",
                            button: 'موافق',
                        });
                        
                    }).catch((error) => {
                        swal("عفوا لم يتم تنفيذ الامر", {
                            icon: "error",
                            button: 'موافق'
                        });

                    })
                } else {
                    swal("تم الغاء الامر", {
                        icon: "error",
                        button: 'موافق'
                    });
                }
            });
            
    }
    const handelDeleteClient = () => {
            swal({
                    title: 'هل أنت واثق؟',
                    text: 'من حذف هذا العميل',
                    icon: "warning",
                    buttons: {
                        cancel: "الغاء",
                        catch: {
                            text: "موافق",
                            value: "catch",
                        },
                    },
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        dispatch(deleteShipping(id))
                        .unwrap()
                        .then((res) => {
                            setHandelStatus(!handelStatus)
                            navigate(from, { replace: true });
                            swal("تم تنفيذ الامر بنجاح", {
                                icon: "success",
                                button: 'موافق',
                            });
                        }).catch((error) => {
                            swal("عفوا لم يتم تنفيذ الامر", {
                                icon: "error",
                                button: 'موافق'
                            });

                        })
                    } else {
                        swal("تم الغاء الامر", {
                            icon: "error",
                            button: 'موافق'
                        });
                    }
                });

    }




    return (
        <MainHeaderClint>
            <MainButtonClint>
                <button onClick={handelStatusClient}>
                {
                    handelStatus ?
                    <Fragment>
                        <FiPause className='icon-button' />أقاف مؤقت
                    </Fragment>
                    : 
                    <Fragment>
                        <GrPlay className='icon-button' /> اعادة تفيعل
                    </Fragment>
                }
                    
                </button>
                <button onClick={handelDeleteClient} ><AiOutlineDelete className='icon-button' />حذف العميل</button>
            </MainButtonClint>
            <ButtonReturn title="/shipping-companies" />
            
        </MainHeaderClint>
    )
}
const MainHeaderClint = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom:1px solid var(--font-opacity) ;

`
const MainButtonClint = styled.div`
display: flex;
button {
    all: unset;
    display: flex;
    align-items: center;
    color: white;
    margin: 8px 10px ;
    padding: 8px 25px;
    border-radius: 8px;
    cursor: pointer;
    :first-child{
        background-color: var(--primary-color);
    }
    :last-child{
        background-color: var(--danger-color);
    }
    .icon-button{
        margin: 0 5px;
        font-size: 24px;
    }
       polygon{
        stroke: #fff;
    }

}
@media (max-width:550px) {
    flex-direction: column;
    button{
        margin: 8px 5px ;
        padding: 8px 15px;
    }

    }
`

export default HeaderButton