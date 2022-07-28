
import { useDispatch, useSelector } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { SendCurrency } from '../../store/CurrencySlice';
import { MdPersonAddAlt } from 'react-icons/md';
import { HideSlider } from '../../store/StateSlice';
import { Form, Input } from 'antd';


const FormAddCurrency = ({ setDeleted, values, setValues }) => {

    const dispatch = useDispatch()
    const errorMsgStore = useSelector(state => state.currency.error)
    const [errorMsg, seterrorMsg] = useState(errorMsgStore);


    useEffect(() => {
        seterrorMsg(errorMsgStore)
    }, [errorMsgStore]);



    return (
        <div className='main-input px-2'>
            <div className='row'>


                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="الاسم بالانجليزي"
                            name="en_nameaShipping"
                            rules={[{ required: true, message: 'الاسم بالانجليزي مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.en_name} placeholder="اكتب الاسم بالانجليزي" onChange={(e) => setValues({ ...values, en_name: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="الاسم بالعربي"
                            name="ar_nameaShipping"
                            rules={[{ required: true, message: 'الاسم بالعربي مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.ar_name} placeholder="اكتب الاسم بالعربي" onChange={(e) => setValues({ ...values, ar_name: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="الاسم رمز العمله"
                            name="ar_nameaShipping"
                            rules={[{ required: true, message: 'الاسم رمز العمله مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.symbol} placeholder="اكتب الاسم رمز العمله" onChange={(e) => setValues({ ...values, symbol: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                {/* <StyleLabel>رمز العمله<span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب الاسم ' value={values.symbol} onChange={(e) => setValues({ ...values, symbol: e.target.value })} /> */}
                {/* <select value={values.symbol} onChange={(e) => setValues({ ...values, symbol: e.target.value })} className="currency">
                            <option value="EGP">EGP</option>
                            <option value="KWD">KWD</option>
                            <option value="USD">USD</option>
                        </select> */}
                {/* <StyleLabel>سعر الصرف<span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب سعر الصرف ' value={values.exchange_rate} onChange={(e) => setValues({ ...values, exchange_rate: e.target.value })} /> */}
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="سعر الصرف"
                            name="mobilShipping"
                            rules={[{ required: true, message: 'سعر الصرف مطلوب!' }]}
                        >
                            <Input type='number' className='form-control' value={values.mobile} placeholder="اكتب سعر الصرف" onChange={(e) => { setValues({ ...values, mobile: e.target.value }); seterrorMsg({ ...errorMsg, mobile: null }) }} />
                        </Form.Item>
                        <span className='text-error'> {errorMsg ? errorMsg.mobile : null} </span>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="رقم تسلسل"
                            name="mobilShipping"
                            rules={[{ required: true, message: 'رقم تسلسل مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.sequence} placeholder="اكتب رقم تسلسل" onChange={(e) => { setValues({ ...values, sequence: e.target.value }); seterrorMsg({ ...errorMsg, mobile: null }) }} />
                        </Form.Item>
                    </div>
                </div>
                {/* <StyleLabel>رقم تسلسل<span>*</span></StyleLabel>
                        <input type="email" placeholder='اكتب رقم تسلسل  ' value={values.sequence} onChange={(e) => setValues({ ...values, sequence: e.target.value })} /> */}


            </div>
        </div>
    )
}
export default FormAddCurrency