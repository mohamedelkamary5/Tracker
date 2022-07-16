import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import InputCustomer from './Inputs'
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';
import { SendManager } from '../../store/ManagersSlice';
import { Button, Form, Input } from 'antd';
import Switch from "react-switch";
import UploadComponent from '../../Shared/Components/Upload/UploadComponent';



const ClintForm = () => {
  const toogleslider = useSelector((state) => state.ShowAndHide.value.manager)
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const initialState = {
    photo: null,
    name: "",
    email: "",
    status: 1,
    password: '',

  }

  const [values, setValues] = useState(initialState)
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


  const handelError = (key) => {
    return (
      <span className='text-error'> {errorMsg ? errorMsg[key] : null} </span>
    )
  }

  const handelChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value })
    seterrorMsg({ ...errorMsg, [target.name]: null })
  }



  const AddUser = () => {
    dispatch(SendManager(values))
      .unwrap()
      .then(() => {
        setValues(initialState)
        dispatch(HideSlider())
        swal("تم تنفيذ الامر بنجاح", {
          icon: "success",
          button: 'موافق',
        });
      })

  }
  return (
    <StyleForm toogleslider={toogleslider ? "true" : 'false'}>
      <div className='style-form p-3 px-lg-5' toogleslider={toogleslider ? "true" : 'false'}>
        <Form
          layout={'vertical'}
          form={form}
          className="px-lg-5"
        >
          <SliderClint title="اضافه مشرف"   >
            {/* <InputCustomer values={values} setValues={setValues} /> */}
            <div className='main-input px-2'>
              <div className='row'>
                {/* Block Item */}
                <div className='col-lg-12'>
                  <div className="mb-3">
                    <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                    {handelError('photo')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                  <div className="mb-3">
                    <Form.Item
                      label="الايميل"
                      name="emailManager"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='email' value={values.email} placeholder="اكتب الايميل" onChange={handelChange} />
                    </Form.Item>
                    {handelError('email')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                  <div className="mb-3">
                    <Form.Item
                      label="الاسم"
                      name="nameaManager"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='name' value={values.name} placeholder="اكتب الاسم" onChange={handelChange} />
                    </Form.Item>
                    {handelError('name')}
                  </div>
                </div>

                {/* Block Item */}
                <div className='col-lg-6'>
                  <div className="mb-3">
                    <Form.Item
                      label="كلة السر"
                      name="passwordManager"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input.Password className='form-control' name='password' value={values.password} placeholder="اكتب كلة السر" onChange={handelChange} />
                    </Form.Item>
                    {handelError('password')}
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
          </SliderClint>
          <StyleFotter>
            <Button htmlType="submit" onClick={AddUser} className="btn btn-main">
              <MdPersonAddAlt className='MdPersonAddAlt' />
              <span>اضافه مشرف</span>
            </Button>

          </StyleFotter>
        </Form>
      </div>
    </StyleForm>
  )
}
const StyleForm = styled.div`

.style-form{
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
padding: 10px 0;
overflow: auto;

}
padding: 35px;
position: fixed;
top: 0;
bottom: 0;
right: 0;
width: 100%;
background-color: white;
z-index: 101;
transition: 0.5s ease;
@media (max-width:625px ) {
  width: 100%;
}
transform: ${(props) => JSON.parse(props.toogleslider) ? 'scale(1)  ' : '  scale(0)  '};

`

const StyleFotter = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;


.MdPersonAddAlt{
    font-size: 25px;
}
@media (max-width:1160px) {  
margin: 10px;
           
}

a{
  color: var(--primary-color);
}

`
export default ClintForm