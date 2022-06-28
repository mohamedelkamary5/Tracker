import React, { useState } from 'react'

import Switch from "react-switch";
import LocationSearchInput from './Location';
import TestSvg from './Map';
import UploadComponent from '../../../../Shared/Components/Upload/UploadComponent';
import GoogleMapComponet from '../../../../Shared/Components/Google-Map/Map';

const FormAddShipping = ({ values, setValues }) => {
    const [selectedFiles, setselectedFiles] = useState([]);
    const handleAcceptedFiles = (files) => {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size)
            })
        );
        setselectedFiles(files)
        setValues({ ...values, photo: files[0] })
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

    const centerMap = { lat: values.lat, lng: values.lon }

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
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="order_no" className="form-label">رقم الطلب<span>*</span> </label>
                        <input type="text" className="form-control" id="order_no" placeholder="اكتب رقم الطلب" value={values.order_no} required onChange={(e) => setValues({ ...values, order_no: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="client_name" className="form-label">اسم العميل<span>*</span> </label>
                        <input type="text" className="form-control" id="client_name" placeholder="اكتب اسم العميل" value={values.client_name} required onChange={(e) => setValues({ ...values, client_name: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">السعر<span>*</span> </label>
                        <input type="text" className="form-control" id="price" placeholder="اكتب السعر" value={values.price} required onChange={(e) => setValues({ ...values, price: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">التليفون<span>*</span> </label>
                        <input type="number" className="form-control" id="mobile" placeholder="اكتب التليفون" value={values.mobile} required onChange={(e) => setValues({ ...values, mobile: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="details" className="form-label"> التفاصيل<span>*</span> </label>
                        <input type="text" className="form-control" id="details" placeholder="اكتب  التفاصيل" value={values.details} required onChange={(e) => setValues({ ...values, details: e.target.value })} />
                    </div>
                </div>
              
                <div className='col-12'>
                    <div className="mb-3 position-relative">
                        {/* <LocationSearchInput values={values} setValues={setValues} /> */}
                        <GoogleMapComponet
                            google={'this.props.google'}
                            center={centerMap}
                            height='300px'
                            zoom={15}
                        />
                    </div>
                </div>

                {/* <TestSvg values={values} /> */}
            </div>

        </div>
    )
}

export default FormAddShipping