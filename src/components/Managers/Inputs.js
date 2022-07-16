import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Switch from "react-switch";
import UploadComponent from '../../Shared/Components/Upload/UploadComponent';
import { Form, Input } from 'antd';

const FormAddShipping = ({ values, setValues }) => {
    const [selectedFiles, setselectedFiles] = useState([]);

    const errorMsgStore = useSelector(state => state.managers.error)

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

    const valueSwitch = values.status == 1 ? true : false

    return (
        <div className='main-input px-2'>
            <div className='row'>
                {/* Block Item */}
                <div className='col-lg-12'>
                    <div className="mb-3">
                        <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                        <span className='text-error'> {errorMsg ? errorMsg.photo : null} </span>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <Form.Item
                            label="الايميل"
                            name="emailManager"
                            rules={[{ required: true, message: 'الايميل مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.email} placeholder="اكتب الايميل" onChange={(e) => setValues({ ...values, email: e.target.value })} />
                        </Form.Item>
                        <span className='text-error'> {errorMsg ? errorMsg.email : null} </span>
                    </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <Form.Item
                            label="الاسم"
                            name="nameaManager"
                            rules={[{ required: true, message: 'الاسم مطلوب!' }]}
                        >
                            <Input className='form-control' value={values.name} placeholder="اكتب الاسم" onChange={(e) => setValues({ ...values, name: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>

                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <Form.Item
                            label="كلة السر"
                            name="passwordManager"
                            rules={[{ required: true, message: 'كلة السر مطلوب!' }]}
                        >
                            <Input.Password className='form-control' value={values.password} placeholder="اكتب كلة السر" onChange={(e) => setValues({ ...values, password: e.target.value })} />
                        </Form.Item>
                    </div>
                </div>

                {/* Block Item */}
                <div className='col-lg-6'>
                    <div className="mb-3">
                        <label htmlFor="switch-add-Manager" className="form-label d-block">الحالة</label>
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
            </div>

        </div>
    )
}

export default FormAddShipping