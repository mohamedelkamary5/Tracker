import React, { useState, useEffect } from 'react'
import { Form, Input } from 'antd';
import Switch from "react-switch";
import LocationSearchInput from './Location';
import TestSvg from './Map';
import UploadComponent from '../../../../Shared/Components/Upload/UploadComponent';
import GoogleMapComponet from '../../../../Shared/Components/Google-Map-Container/Google-Map/Map';
import { useDispatch, useSelector } from 'react-redux'

const FormAddOrder = ({ values, setValues }) => {
    const errorMsgStore = useSelector(state => state.ordersRestauants.error)

    console.log('errorMsgStore errorMsgStore errorMsgStore', errorMsgStore);
    const [errorMsg, seterrorMsg] = useState(errorMsgStore);


    useEffect(() => {
        seterrorMsg(errorMsgStore)
    }, [errorMsgStore]);

    const centerMap = { lat: values.lat, lng: values.lon }

    const handleMapInfo = (data) => {
        setValues({ ...values, address: data.address, lat: data.lat, lon: data.lng })
    }

    return (
        <div className='main-input px-2'>
            <div className='row'>
                {/* Block Item */}
                {/* <div className='col-lg-12'>
                    <div className="mb-3">
                        <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                    </div>
                </div> */}
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="رقم الطلب"
                            name="en_nameaOrder"
                            rules={[{ required: true, message: 'رقم الطلب مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.en_name} placeholder="اكتب رقم الطلب" onChange={(e) => setValues({ ...values, order_no: e.target.value })} />
                        </Form.Item>
                    </div>

                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="الاسم"
                            name="ar_nameaOrder"
                            rules={[{ required: true, message: 'الاسم مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.client_name} placeholder="اكتب الاسم" onChange={(e) => setValues({ ...values, client_name: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                {/* Block Item */}
                {/* <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">السعر<span>*</span> </label>
                        <input type="text" className="form-control" id="price" placeholder="اكتب السعر" value={values.price} required onChange={(e) => setValues({ ...values, price: e.target.value })} />
                    </div>
                </div> */}
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="السعر"
                            name="priceOrder"
                            rules={[{ required: true, message: '' }]}
                        >
                            <Input type='number' className='form-control' value={values.price} placeholder="اكتب السعر" onChange={(e) => { setValues({ ...values, price: e.target.value }); seterrorMsg({ ...errorMsg, price: null }) }} />
                        </Form.Item>
                        <span className='text-error'> {errorMsg ? errorMsg.price : null} </span>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="التليفون"
                            name="mobilOrder"
                            rules={[{ required: true, message: '' }]}
                        >
                            <Input type='number' className='form-control' value={values.mobile} placeholder="اكتب التليفون" onChange={(e) => { setValues({ ...values, mobile: e.target.value }); seterrorMsg({ ...errorMsg, mobile: null }) }} />
                        </Form.Item>
                        <span className='text-error'> {errorMsg ? errorMsg.mobile : null} </span>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="التفاصيل"
                            name="details"
                            rules={[{ required: true, message: 'التفاصيل مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.details} placeholder="اكتب التفاصيل" onChange={(e) => setValues({ ...values, details: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
              
                <div className='col-12'>
                    <div className="mb-3 position-relative">
                        <GoogleMapComponet
                            google={'this.props.google'}
                            center={centerMap}
                            height='300px'
                            zoom={15}
                            handleMapInfo={handleMapInfo}
                        />
                        <span className='text-error'> {errorMsg ? errorMsg.address : null} </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FormAddOrder