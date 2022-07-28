import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import InputCustomer from './Inputs'
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';
import { SendQuote } from '../../store/QuotesSlice';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

const ClintForm = () => {
  const {t} = useTranslation()

  const initialState = {
    en_title: '',
    ar_title: '',
    en_desc: "",
    ar_desc: "",
    sequence: '',
    cost: '',
    months: "",

  }
  const toogleslider = useSelector((state) => state.ShowAndHide.value.quotes)

  const dispatch = useDispatch()
  const [values, setValues] = useState(initialState)
  const [form] = Form.useForm();
  const errorMsgStore = useSelector(state => state.quotes.error)

  const [errorMsg, seterrorMsg] = useState(errorMsgStore);



  const handelError = (key) => {
    return (
      <span className='text-error'> {errorMsg ? errorMsg[key] : null} </span>
    )
  }

  const handelChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value })
    seterrorMsg({ ...errorMsg, [target.name]: null })
  }
  useEffect(() => {
    seterrorMsg(errorMsgStore)
  }, [errorMsgStore]);


  const AddUser = () => {
    dispatch(SendQuote(values))
      .unwrap()
      .then(() => {
        setValues(initialState)
        dispatch(HideSlider())
        form.resetFields();
        swal("تم تنفيذ الامر بنجاح", {
          icon: "success",
          button: 'موافق',
        });
      })
  }

  return (
    <StyleForm toogleslider={toogleslider ? "true" : 'false'}>
      <div className='style-form' toogleslider={toogleslider ? "true" : 'false'}>
        <Form
          layout={'vertical'}
          form={form}
          className="px-lg-5"
        >

          <SliderClint title={t("btnAddPackage")}   >
            {/* <InputCustomer values={values} setValues={setValues} /> */}
            <div className='main-input px-2'>
              <div className='row'>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("en_name")}
                      name="en_nameaquote"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='en_title' value={values.en_title} placeholder={t("writeNameEn")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('en_title')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("ar_name")}
                      name="ar_nameaquote"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='ar_title' value={values.ar_title} placeholder={t("writeNameAr")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('ar_title')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("curSequence")}
                      name="sequence"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type="number" className='form-control' name='sequence' value={values.sequence} placeholder={t("writeCurSequence")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('sequence')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("sortCost")}
                      name="cost"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type="number" className='form-control' name='cost' value={values.cost} placeholder={t("writeCost")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('cost')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("NumDrivers")}
                      name="drivers_count"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type="number" className='form-control' name='drivers_count' value={values.drivers_count} placeholder={t("writeNumDrivers")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('drivers_count')}
                  </div>
                </div>
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("sortMonths")}
                      name="months"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type="number" className='form-control' name='months' value={values.months} placeholder={t("writeMonth")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('months')}
                  </div>
                </div>


              </div>
            </div>




          </SliderClint>
          <StyleFotter>
            <Button htmlType="submit" onClick={AddUser} className="btn btn-main">
              <MdPersonAddAlt className='MdPersonAddAlt' />
              <span>{t("btnAddPackage")}</span>
            </Button>
          </StyleFotter>
        </Form>
        {/* <StyleFotter>
          <button onClick={AddUser} className="btn btn-main">
            <MdPersonAddAlt className='MdPersonAddAlt' />
            <span>اضافه باقه</span>
          </button>

          <span>تريد المساعدة ؟ <a href='#'>اضغط هنا</a></span>
        </StyleFotter> */}
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