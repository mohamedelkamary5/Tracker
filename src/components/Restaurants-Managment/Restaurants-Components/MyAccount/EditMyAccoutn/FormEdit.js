import React, { useState, useEffect } from 'react'
import { FaUserEdit } from 'react-icons/fa';
import { postFromData } from './../../../../../api/axios'
import swal from 'sweetalert';
import { Button, Form, Input } from 'antd';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import GoogleMapComponet from '../../../../../Shared/Components/Google-Map-Container/Google-Map/Map';
import UploadComponent from '../../../../../Shared/Components/Upload/UploadComponent';

const FormEdit = ({ dataMyAccount }) => {
  const [form] = Form.useForm();

  const ImgeHandeler = (e) => {
    const Reader = new FileReader()
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setValues({ ...values, photo: Reader.result })
      }
    }
    Reader.readAsDataURL(e.target.files[0])
  }


  const [values, setValues] = useState({
    id: '',
    email: '',
    en_name: '',
    ar_name: '',
    mobile: '',
    telephone: '',
    password: '',
    user_id: '',
    lat: 0,
    lng: 0,
    address: '',
    photo: null,
  })


  useEffect(() => {
    setValues({
      id: dataMyAccount.id,
      email: dataMyAccount.email,
      en_name: dataMyAccount.en_name,
      ar_name: dataMyAccount.ar_name,
      mobile: dataMyAccount.mobile,
      telephone: dataMyAccount.telephone,
      password: dataMyAccount.password,
      user_id: dataMyAccount.user_id,
      lat: dataMyAccount.lat,
      lng: dataMyAccount.lon,
      address: dataMyAccount.address,
      photo: null,
    })
  }, []);

  const [selectedFiles, setselectedFiles] = useState([]);
  const [errorMsgStore, setErrorMsgStore] = useState({});

  console.log('dataMyAccount dataMyAccount dataMyAccount', values.lat);
  console.log('dataMyAccount dataMyAccount dataMyAccount', values.lng);

  // const [centerMap, setcenterMap] = useState({ address: 'values.address', lat: values.lat, lng: values.lng });
  // setcenterMap({
  //   address: values.address, lat: values.lat, lng: values.lng 
  // })
  const [centerMap, setcenterMap] = useState({ address: values.address, lat: 30.05, lng: 31.37 });

  




  const [errorMsg, seterrorMsg] = useState(errorMsgStore);
  useEffect(() => {
    seterrorMsg(errorMsgStore)
  }, [errorMsgStore]);


  const HandelChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const valuesData = {}
    valuesData['id'] = values.id
    valuesData['email'] = values.email
    valuesData['name'] = values.name
    if (values.photo != null) {
      valuesData['photo'] = values.photo
    }


    postFromData('restaurants/profile/update', valuesData)
      .then((res) => {
        const userData = JSON.stringify({ user: res.data })
        localStorage.setItem('authDataRestaurant', userData)
        swal("تم تنفيذ الامر بنجاح", {
          icon: "success",
          button: 'موافق',
        });
      })
      .catch(err => {
        console.log('err', err)
        swal("عفوا لم يتم تنفيذ الامر", {
          icon: "error",
          button: 'موافق'
        });
        setErrorMsgStore(err)
      })
  }

  const handleMapInfo = (data) => {
    setValues({ ...values, address: data.address, lat: data.lat, lon: data.lng })
    seterrorMsg({ ...errorMsg, address: null })
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

  const handleSelect = (e) => {
    setValues({ ...values, user_id: e.value })
    seterrorMsg({ ...errorMsg, user_id: null })
  }


  const UserDataSelector = useSelector(state => state.shipping.shipping)
  const options = UserDataSelector.map(d => ({
    "value": d.id,
    "label": d.en_name,
  }))


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

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };




  return (
    <div className='input-edit-account w-100'>
      <h2>تعديل البيانات</h2>
      <div className='edit-account-section main-input'>
        <Form
          layout={'vertical'}
          form={form}
          className="px-lg-5"
        >

          <div className='row'>

            {/* Block Item */}
            <div className='col-lg-3'>
              <div className="mb-3">

                <label htmlFor="emailRestaurant" className="form-label">الايميل<span>*</span> </label>
                <Input disabled className='form-control' name='email' value={values.email} placeholder="اكتب الايميل" onChange={handelChange} />
                {handelError('email')}
              </div>
            </div>
            {/* Block Item */}
            <div className='col-lg-3'>
              <div className="mb-3">
                <label htmlFor="en_name" className="form-label">الاسم بالانجليزي<span>*</span> </label>
                <Input className='form-control' name='en_name' value={values.en_name} placeholder="اكتب الاسم بالانجليزي" onChange={handelChange} />
                {handelError('en_name')}
              </div>
            </div>
            {/* Block Item */}
            <div className='col-lg-3'>
              <div className="mb-3">
                <label htmlFor="ar_name" className="form-label">الاسم بالعربي<span>*</span> </label>
                <Input className='form-control' name='ar_name' value={values.ar_name} placeholder="اكتب الاسم بالعربي" onChange={handelChange} />
                {handelError('ar_name')}
              </div>
            </div>
            {/* Block Item */}
            <div className='col-lg-3'>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">الموبيل<span>*</span> </label>
                <Input type='number' className='form-control' name='mobile' value={values.mobile} placeholder="اكتب الموبيل" onChange={handelChange} />
                {handelError('mobile')}
              </div>
            </div>
            {/* Block Item */}
            <div className='col-lg-3'>
              <div className="mb-3">
                <label htmlFor="telephone" className="form-label"> التليفون<span>*</span> </label>
                <Input type='number' className='form-control' name='telephone' value={values.telephone} placeholder="اكتب التليفون" onChange={handelChange} />
                {handelError('telephone')}
              </div>
            </div>

            {/* Block Item */}
            <div className='col-lg-3'>
              <div className="mb-3">
                <label htmlFor="telephone" className="form-label"> كلة السر<span>*</span> </label>
                <Input.Password className='form-control' name='password' value={values.password} placeholder="اكتب كلة السر" onChange={handelChange} />
                {handelError('password')}
              </div>
            </div>
            {/* Block Item */}
            <div className='col-lg-3'>

              <div className="mb-3">
                <label htmlFor="en_name" className="form-label">اختار شركه شحن<span>*</span> </label>
                <Select options={options} name="user_id" onChange={handleSelect} />
                {handelError('user_id')}
              </div>
            </div>
            <div className='col-6'>
              <div className="mb-3 position-relative">

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
            {/* Block Item */}
            <div className='col-lg-6'>
              <div className="mb-3">
                <UploadComponent handleAcceptedFiles={handleAcceptedFiles} selectedFiles={selectedFiles} />
                {handelError('photo')}
              </div>
            </div>

          </div>
        </Form>


        {/* <form>
          <div className='display-input' >
            <div className='input'>
              <label className='disabled'> #</label>
              <input className='disabled' disabled value={values.id} />
            </div>
            <div className='input'>
              <label className='disabled'> الايميل</label>
              <input className='disabled' disabled value={values.email} />
            </div>
            <div className='input'>
              <label>شعار  <span>*</span></label>
              <input type="file" onChange={ImgeHandeler} />
            </div>
            <div className='input'>
              <label>الاسم <span>*</span></label>
              <input type="text" name='name' value={values.name} onChange={HandelChange} />
            </div>

          </div>
          <div className='edit mb-3'>
            <button onClick={handelSubmit} className='btn btn-dark' > <span>تعديل</span> <FaUserEdit /></button>
          </div>
        </form> */}



      </div>
    </div>

  )
}


export default FormEdit