import React, { useState, useEffect } from 'react'
import { Form, Input } from 'antd';
import "antd/dist/antd.css";
import Switch from "react-switch";
// import LocationSearchInput from './Location';
import TestSvg from './Map';
import UploadComponent from '../../Shared/Components/Upload/UploadComponent';
import GoogleMapComponet from '../../Shared/Components/Google-Map-Container/Google-Map/Map';
import { type } from '@testing-library/user-event/dist/type';
import { useDispatch, useSelector } from 'react-redux'

const FormAddShipping = ({ values, setValues }) => {
    const [selectedFiles, setselectedFiles] = useState([]);
    const errorMsgStore = useSelector(state => state.shipping.error)

    const [errorMsg, seterrorMsg] = useState(errorMsgStore);


    useEffect(() => {
        seterrorMsg(errorMsgStore)
    }, [errorMsgStore]);


    const handleAcceptedFiles = (files) => {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size)
            })
        );
        setselectedFiles(files)
        setValues({ ...values, photo: files[0] })
        seterrorMsg({ ...errorMsg, photo: null })
    }



    const staustSwittch = (e) => {
        if (values.status == 1) {
            setValues({ ...values, status: 0 })
        } else {
            setValues({ ...values, status: 1 })
        }
    }

    const formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    const valueSwitch = values.status == 1 ? true : false;

    const centerMap = { address: values.address, lat: values.lat, lng: values.lon }

    const handleMapInfo = (data) => {
        setValues({ ...values, address: data.address, lat: data.lat, lon: data.lng })
        seterrorMsg({ ...errorMsg, address: null })
    }

    return (
        <div className='main-input px-2'>
            {/* <Form
                layout={'vertical'}
            > */}
            <div className='row'>

                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="الايميل"
                            name="emailShipping"
                            rules={[{ required: true, message: 'الايميل مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.email} placeholder="اكتب الايميل" onChange={(e) => { setValues({ ...values, email: e.target.value }); seterrorMsg({ ...errorMsg, email: null }) }} />
                        </Form.Item>
                        <span className='text-error'> {errorMsg ? errorMsg.email : null} </span>
                    </div>
                </div>
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
                            label="التليفون"
                            name="mobilShipping"
                            rules={[{ required: true, message: '' }]}
                        // rules={[{ required: true, message: 'التليفون مطلوب!' }, { len: 11, message: 'التليفون يجب ان يكون 11 رقم' }]}
                        >
                            <Input type='number' className='form-control' value={values.mobile} placeholder="اكتب التليفون" onChange={(e) => { setValues({ ...values, mobile: e.target.value }); seterrorMsg({ ...errorMsg, mobile: null }) }} />
                        </Form.Item>
                        <span className='text-error'> {errorMsg ? errorMsg.mobile : null} </span>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                        <span className='text-error'> {errorMsg ? errorMsg.photo : null} </span>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <Form.Item
                            label="كلة السر"
                            name="passwordShipping"
                            rules={[{ required: true, message: 'كلة السر مطلوب!' }]}
                        >
                            <Input.Password className='form-control' value={values.password} placeholder="اكتب كلة السر" onChange={(e) => setValues({ ...values, password: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                    <div className="mb-3">
                        <label htmlFor="switch-add-shipping" className="form-label d-block">الحالة</label>
                        <label className="switch-item" htmlFor='switch-add-shipping'>
                            <Switch
                                checked={valueSwitch}
                                onChange={staustSwittch}
                                id='switch-add-shipping'
                                handleDiameter={28}
                                offColor="#dfdcdc"
                                onColor="#f7d294"
                                offHandleColor="#707070"
                                onHandleColor="#FB9E00"
                                height={30}
                                width={70}
                                borderRadius={50}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                className="react-switch"
                            />
                        </label>
                    </div>
                </div>
                <div className='col-12'>
                    <div className="mb-3 position-relative">
                        {/* <LocationSearchInput values={values} setValues={setValues} /> */}
                        {/* <LocationSearchInput onPlaceOut={this.onPlaceOut} /> */}
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

                {/* <TestSvg values={values} /> */}
            </div>
            {/* <Form.Item label=" ">
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item> */}
            {/* </Form> */}

        </div>
    )
}

export default FormAddShipping