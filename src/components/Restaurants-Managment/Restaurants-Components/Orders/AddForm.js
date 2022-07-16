import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../../../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../../../store/StateSlice';
import { SendOrder } from '../../../../store/Restaurants-Managment/OrdersRestauantsSlice';
import { Button, Form, Input } from 'antd';
import GoogleMapComponet from '../../../../Shared/Components/Google-Map-Container/Google-Map/Map';
const AddOrderForm = ({ setShow }) => {
  const toogleslider = useSelector((state) => state.ShowAndHide.value.order)
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const initialState = {
    order_no: 0,
    client_name: '',
    address: "",
    price: "",
    mobile: '',
    telephone: '',
    email: "",
    lon: 0,
    lat: 0

  }

  const [values, setValues] = useState(initialState)
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

  const AddUser = () => {
    dispatch(SendOrder(values))
      .unwrap()
      .then(() => {
        setValues(initialState)
        dispatch(HideSlider())
        form.resetFields();
        swal("تم تنفيذ الامر بنجاح", {
          icon: "success",
          button: 'موافق',
        });
      }).catch(() => {
        // swal("عفوا لم يتم تنفيذ الامر", {
        //   icon: "error",
        //   button: 'موافق'
        // });

      })

    setShow(true)
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


  return (
    <StyleForm toogleslider={toogleslider ? "true" : 'false'}>
      <div className='style-form p-3 px-lg-5' toogleslider={toogleslider ? "true" : 'false'}>
        <Form
          layout={'vertical'}
          form={form}
          className="px-lg-5"
        >
          <SliderClint title="اضافه طلب"   >
            <div className='main-input px-2'>
              <div className='row'>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label="رقم الطلب"
                      name="en_nameaOrder"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='order_no' value={values.order_no} placeholder="اكتب رقم الطلب" onChange={handelChange} />
                    </Form.Item>
                    {handelError('order_no')}
                  </div>

                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label="الاسم"
                      name="ar_nameaOrder"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='client_name' value={values.client_name} placeholder="اكتب الاسم" onChange={handelChange} />
                    </Form.Item>
                    {handelError('client_name')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label="السعر"
                      name="priceOrder"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type='number' className='form-control' name='price' value={values.price} placeholder="اكتب السعر" onChange={handelChange} />
                    </Form.Item>
                    {handelError('price')}

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
                      <Input type='number' className='form-control' name='mobile' value={values.mobile} placeholder="اكتب التليفون" onChange={handelChange} />
                    </Form.Item>
                    {handelError('mobile')}

                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label="التفاصيل"
                      name="details"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input.TextArea className='form-control' name='details' value={values.details} placeholder="اكتب التفاصيل" onChange={handelChange} />
                    </Form.Item>
                    {handelError('details')}

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
                    {handelError('address')}
                  </div>
                </div>

              </div>

            </div>
          </SliderClint>
          <StyleFotter>
            <Button htmlType="submit" onClick={AddUser} className="btn btn-main">
              <MdPersonAddAlt className='MdPersonAddAlt' />
              <span>اضافه طلب</span>
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
export default AddOrderForm