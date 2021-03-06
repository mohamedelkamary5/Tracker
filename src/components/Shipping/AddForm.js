import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { SendShipping } from '../../store/ShippingSlice';
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';
import { Button, Form, Input } from 'antd';
import Switch from "react-switch";
import UploadComponent from '../../Shared/Components/Upload/UploadComponent';
import GoogleMapComponet from '../../Shared/Components/Google-Map-Container/Google-Map/Map';
import { useTranslation } from 'react-i18next';

const ClintForm = () => {
  const initialState = {
    photo: [],
    en_name: "",
    ar_name: "",
    mobile: '',
    telephone: '',
    address: "",
    email: "",
    status: 0,
    password: '',
    lat: 0.000000,
    lon: 0.000000,

  }
  const toogleslider = useSelector((state) => state.ShowAndHide.value.Shipping)

  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const [selectedFiles, setselectedFiles] = useState([]);
  const errorMsgStore = useSelector(state => state.shipping.error)

  const [errorMsg, seterrorMsg] = useState(errorMsgStore);


  const [values, setValues] = useState(initialState)


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

  const AddUser = () => {
    dispatch(SendShipping(values))
      .unwrap()
      .then(() => {
        setValues(initialState)
        dispatch(HideSlider())
        form.resetFields();
        swal("???? ?????????? ?????????? ??????????", {
          icon: "success",
          button: '??????????',
        });
      })
  }


  const handelError = (key) => {
    return (
      <span className='text-error'> {errorMsg ? errorMsg[key] : null} </span>
    )
  }

  const handelChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value })
    seterrorMsg({ ...errorMsg, [target.name]: null })
  }
  const {t} = useTranslation()



  return (
    <StyleForm toogleslider={toogleslider ? "true" : 'false'}>
      <div className='style-form p-3 px-lg-5' toogleslider={toogleslider ? "true" : 'false'}>
        <Form
          layout={'vertical'}
          form={form}
          className="px-lg-5"
        >
          <SliderClint title={t("btnAddShipping")}   >
            {/* <InputCustomer values={values} setValues={setValues} /> */}
            <div className='main-input px-2'>
              {/* <Form
                layout={'vertical'}
            > */}
              <div className='row'>

                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("email")} 
                      name="emailShipping"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='email' value={values.email} placeholder={t("writeMail")} onChange={handelChange} />
                    </Form.Item>                    
                    {handelError('email')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("en_name")}
                      name="en_nameaShipping"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='en_name' value={values.en_name} placeholder={t("writeNameEn")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('en_name')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("ar_name")}
                      name="ar_nameaShipping"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='ar_name' value={values.ar_name} placeholder={t("writeNameAr")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('ar_name')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("telephone")}
                      name="mobilShipping"
                      rules={[{ required: true, message: '' }]}
                    // rules={[{ required: true, message: '???????????????? ??????????!' }, { len: 11, message: '???????????????? ?????? ???? ???????? 11 ??????' }]}
                    >
                      <Input type='number' className='form-control' name='mobile' value={values.mobile} placeholder={t("writeTelephone")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('mobile')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-6'>
                  <div className="mb-3">
                    <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                    {handelError('photo')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("lapelPassword")}
                      name="passwordShipping"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input.Password className='form-control' name='password' value={values.password} placeholder={t("writePassword")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('password')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <label htmlFor="switch-add-shipping" className="form-label d-block">{t("state")}</label>
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
                    {handelError('address')}
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
          </SliderClint>
          <StyleFotter>

              <Button htmlType="submit" onClick={AddUser} className="btn btn-main">
                <MdPersonAddAlt className='MdPersonAddAlt' />
                <span>{t("btnAddShipping")} </span>
              </Button>
            {/* <button onClick={AddUser} className="btn btn-main">
            <MdPersonAddAlt className='MdPersonAddAlt' />
            <span> ???????? ??????</span>
          </button> */}

            {/* <span>???????? ???????????????? ?? <a href='#'>???????? ??????</a></span> */}
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
&::-webkit-scrollbar{
        width: 4px;
}
&::-webkit-scrollbar-thumb {
        background-color: var(--secound-color);
        border-radius: 10px;
}
&::-webkit-scrollbar-track {
	background: var(--primary-color);
}

}
// padding: 35px;
position: fixed;
top: 0;
bottom: 0;
right: 0;
width: 100%;
// width: 550px;
background-color: white;
z-index: 101;
transition: 0.5s ease;
@media (max-width:625px ) {
  width: 100%;
}
transform: ${(props) => JSON.parse(props.toogleslider) ? 'scale(1)  ' : '  scale(0)  '};
// transform: ${(props) => JSON.parse(props.toogleslider) ? 'translateX(0)  ' : '  translateX(590px)  '};

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