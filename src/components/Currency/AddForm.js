import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import InputCustomer from './Inputs'
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';
import { SendCurrency } from '../../store/CurrencySlice';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';


const ClintForm = ({ setShow }) => {
  const toogleslider = useSelector((state) => state.ShowAndHide.value.currency)
  const {t} = useTranslation()

  //get date today
  const today = new Date();
  const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  //redux toolkit
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const initialState = {
    en_title: '',
    ar_title: '',
    sequence: "",
    symbol: "",
    exchange_rate: '',

  }

  const [values, setValues] = useState(initialState)
  const errorMsgStore = useSelector(state => state.currency.error)

  const [errorMsg, seterrorMsg] = useState(errorMsgStore);


  useEffect(() => {
    seterrorMsg(errorMsgStore)
  }, [errorMsgStore]);

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
    dispatch(SendCurrency(values))
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
          <SliderClint title={t("btnAddCurrency")}   >
            {/* <InputCustomer values={values} setValues={setValues} /> */}
            <div className='main-input px-2'>
              <div className='row'>


                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("en_name")}
                      name="en_titleaCurrency"
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
                      name="ar_nameaCurrency"
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
                      label={t("curSymbol")}
                      name="symbol"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input className='form-control' name='symbol' value={values.symbol} placeholder={t("writeSymbol")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('symbol')}
                  </div>
                </div>
                {/* <StyleLabel>رمز العمله<span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب الاسم ' name='symbol' value={values.symbol} onChange={(e) => setValues({ ...values, symbol: e.target.value })} /> */}
                {/* <select name='symbol' value={values.symbol} onChange={(e) => setValues({ ...values, symbol: e.target.value })} className="currency">
                            <option value="EGP">EGP</option>
                            <option value="KWD">KWD</option>
                            <option value="USD">USD</option>
                        </select> */}
                {/* <StyleLabel>سعر الصرف<span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب سعر الصرف ' name='exchange_rate' value={values.exchange_rate} onChange={(e) => setValues({ ...values, exchange_rate: e.target.value })} /> */}
                {/* Block Item */}
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("curRate")}
                      name="exchange_rateCurrency"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type='number' className='form-control' name='exchange_rate' value={values.exchange_rate} placeholder={t("writeExchange_rate")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('exchange_rate')}
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className="mb-3">
                    <Form.Item
                      label={t("curSequenceNum")}
                      name="mobilCurrency"
                      rules={[{ required: true, message: '' }]}
                    >
                      <Input type='number' className='form-control' name='sequence' value={values.sequence} placeholder={t("writeCurSequence")} onChange={handelChange} />
                    </Form.Item>
                    {handelError('sequence')}
                  </div>
                </div>


              </div>
            </div>
          </SliderClint>
          <StyleFotter>
            <Button htmlType="submit" onClick={AddUser} className="btn btn-main m-1">
              <MdPersonAddAlt className='MdPersonAddAlt' />
              <span>{t("btnAddCurrency")}</span>
            </Button>

            {/* <span>تريد المساعدة ؟ <a href='#'>اضغط هنا</a></span> */}
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