import React, { useState } from 'react'
import Select from 'react-select'
import Switch from "react-switch";
import UploadComponent from '../../Shared/Components/Upload/UploadComponent';
import { useSelector, useDispatch } from 'react-redux'

const FormAddShipping = ({ values, setValues }) => {

    //select Shipping 
    const shippingData = useSelector(state => state.shipping.shipping)
    //const domyData = [{id:1,en_name:"mohamed"},{id:2,en_name:"ahmed"}]
    const options = shippingData.map(d => ({
        "value" : d.id,
        "label" : d.en_name,
      }))
      const [initOption , SetinitOption] = useState(options)
     
 
 console.log(initOption)



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
    const staustOnlineSwittch = (e) => {
        if (values.isOnline == 1) {
            setValues({ ...values, isOnline: 0 })
        } else {
            setValues({ ...values, isOnline: 1 })
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

    const valueSwitch = values.status == 1 ? true : false
    const valueOnlineSwitch = values.isOnline == 1 ? true : false

    return (
        <div className='main-input px-2'>
            <div className='row'>
                {/* Block Item */}
                <div className='col-lg-12'>
                    <div className="mb-3">
                        <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                    </div>
                </div>
                <div className='col-lg-12'>
                <div className="mb-3">
                <label htmlFor="en_name" className="form-label">اختار شركه شحن<span>*</span> </label>
                <Select options={initOption} name="اختار"  onChange={(e) => setValues({ ...values, user_id: e.value })}   />
                </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">الايميل<span>*</span> </label>
                        <input type="email" className="form-control" id="email" placeholder="اكتب الايميل" value={values.email} required onChange={(e) => setValues({ ...values, email: e.target.value })} />
                    </div>
                </div>
               
                
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="en_name" className="form-label">الاسم بالانجليزي<span>*</span> </label>
                        <input type="text" className="form-control" id="en_name" placeholder="اكتب الاسم بالانجليزي" value={values.en_name} required onChange={(e) => setValues({ ...values, en_name: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="ar_name" className="form-label">الاسم بالعربي<span>*</span> </label>
                        <input type="text" className="form-control" id="ar_name" placeholder="اكتب الاسم بالعربي" value={values.ar_name} required onChange={(e) => setValues({ ...values, ar_name: e.target.value })} />
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
                        <label htmlFor="password" className="form-label"> كلة السر<span>*</span> </label>
                        <input type="password" className="form-control" id="password" placeholder="اكتب  كلة السر" value={values.password} required onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </div>
                </div>
                {/* Block Item */}
                {/* <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label"> العنوان<span>*</span> </label>
                        <input type="text" className="form-control" id="address" placeholder="اكتب  العنوان" value={values.address} required onChange={(e) => setValues({ ...values, address: e.target.value })} />
                    </div>
                </div> */}
                {/* Block Item */}

                <div className='col-lg-6'>
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
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="switch-add-shipping" className="form-label d-block"> الحالة الاتصال</label>
                        <label className="switch-item" htmlFor='switch-add-shipping'>
                            <Switch
                                checked={valueOnlineSwitch}
                                onChange={staustOnlineSwittch}
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
                
               
            </div>

        </div>
    )
}

export default FormAddShipping