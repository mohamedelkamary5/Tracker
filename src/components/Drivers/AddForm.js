import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import InputCustomer from './Inputs'
import { useDispatch, useSelector } from 'react-redux'
import SliderClint from '../glopal/SliderClint';
import { MdPersonAddAlt } from 'react-icons/md';
import swal from 'sweetalert';
import { HideSlider } from '../../store/StateSlice';
import { SendDirver } from '../../store/DriverSlice';
import { getShipping } from '../../store/ShippingSlice';

const ClintForm = () => {
  const toogleslider = useSelector((state) => state.ShowAndHide.value.driver)
  const dispatch = useDispatch()

  const initialState = {
    photo: null,
    user_id: null,
    en_name: "",
    ar_name: "",
    mobile: '',
    telephone: '',
    address: "",
    email: "",
    status: 1,
    isOnline: 0,
    password: '',

  }


  const [values, setValues] = useState(initialState)
  console.log(values)
  const AddUser = () => {
    dispatch(SendDirver(values))
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
      <div className='style-form' toogleslider={toogleslider ? "true" : 'false'}>
        <SliderClint title="اضافه سائق"   >
          <InputCustomer values={values}  setValues={setValues} />
        </SliderClint>
        <StyleFotter>
          <button onClick={AddUser} className="btn btn-main">
            <MdPersonAddAlt className='MdPersonAddAlt' />
            <span>اضافه سائق</span>
          </button>

          <span>تريد المساعدة ؟ <a href='#'>اضغط هنا</a></span>
        </StyleFotter>
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
width: 550px;
background-color: white;
z-index: 101;
transition: 0.5s ease;
@media (max-width:625px ) {
  width: 100%;
}
transform: ${(props) => JSON.parse(props.toogleslider) ? 'translateX(0)  ' : '  translateX(590px)  '};

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