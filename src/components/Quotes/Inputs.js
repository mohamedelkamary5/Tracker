
import React from 'react'
import { useDispatch } from 'react-redux'
import ShortUniqueId from 'short-unique-id'
import styled from "styled-components"


const FormAddShipping = ({ values, setValues }) => {
    const ImgeHandeler = (e) => {
        const Reader = new FileReader()
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setValues({ ...values, photo: e.target.files[0] })
                // console.log('e.target.files[0]:::::1111111', e.target.files[0]);
                // console.log('e.target.files[0]:::::1111111', Reader.result);
            }
        }
        // console.log('e.target.files[0]', e.target.files[0]);
        Reader.readAsDataURL(e.target.files[0])
    }
    //get date today
    const today = new Date();
    const date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    //redux toolkit
    const dispatch = useDispatch()
    //uniqe id
    const uid = new ShortUniqueId({ length: 6 });
    //values input

    return (
        <StyleMainInput>
            <StyleForm>
                <StyleSmaleDiv>
                    <div className='one-input'>
                        <StyleLabel>الاسم بالانجليزي <span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب الاسم بالانجليزي' value={values.en_title} onChange={(e) => setValues({ ...values, en_title: e.target.value })} />
                    </div>
                    <div className='one-input'>
                        <StyleLabel>الاسم بالعربي <span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب الاسم بالعربي' value={values.ar_title} onChange={(e) => setValues({ ...values, ar_title: e.target.value })} />
                    </div>

                </StyleSmaleDiv>


                <StyleSmaleDiv>
                    <div className='one-input'>
                        <StyleLabel>الوصف بالانجليزي <span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب الوصف بالانجليزي' value={values.en_desc} onChange={(e) => setValues({ ...values, en_desc: e.target.value })} />
                    </div>
                    <div className='one-input'>
                        <StyleLabel>الوصف بالعربي <span>*</span></StyleLabel>
                        <input type="text" placeholder='اكتب الوصف بالعربي' value={values.ar_desc} onChange={(e) => setValues({ ...values, ar_desc: e.target.value })} />
                    </div>

                </StyleSmaleDiv>


                <StyleSmaleDiv>
                    <div className='one-input'>
                        <StyleLabel>تسلسل <span>*</span></StyleLabel>
                        <input type="number" required placeholder='اكتب تسلسل' value={values.sequence} onChange={(e) => setValues({ ...values, sequence: e.target.value })} />

                        <StyleLabel>التكلفة <span>*</span></StyleLabel>
                        <input type="number" placeholder='اكتب التكلفة' value={values.cost} onChange={(e) => setValues({ ...values, cost: e.target.value })} />

                        <StyleLabel>عدد السائقين <span>*</span></StyleLabel>
                        <input type="number" placeholder='اكتب عدد السائقين' value={values.drivers_count} onChange={(e) => setValues({ ...values, drivers_count: e.target.value })} />
                        
                        <StyleLabel>الاشهور <span>*</span></StyleLabel>
                        <input type="number" placeholder='اكتب الاشهور' value={values.months} onChange={(e) => setValues({ ...values, months: e.target.value })} />

                    </div>
                </StyleSmaleDiv>

            </StyleForm>
            {/* <StyleButtonAdd onClick={AddUser} >
                <MdPersonAddAlt className='MdPersonAddAlt' />
                <span > إضافة عميل </span>
            </StyleButtonAdd> */}
        </StyleMainInput>
    )
}
const StyleMainInput = styled.div`
overflow-y: auto;
overflow-x: hidden;
padding: 20px 0;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;

::-webkit-scrollbar {
  width: 0px;
}
`
const StyleForm = styled.form`

`
const StyleLabel = styled.label`
font-weight: bold;
span{
    color: var(--danger-color);
}
`
const StyleSmaleDiv = styled.div`
display: flex;
align-items: center;
@media (max-width:550px ) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
}
&:first-child{
    opacity: 0.6;
}
&:nth-child(4){
    input {
    width: 470px;
    @media (max-width:550px ) {
    width:290px;
    padding: 10px 30px;
    }
    @media (max-width:370px ) {
    width:220px;
    padding: 10px 30px;
}

    }
}

input,.currency{
    font-size: 14px;
    width: 230px;
    margin: 8px 0 8px 10px;
    padding: 8px 12px;
    border: 1px solid var(--font-opacity);
    border-radius: 20px;
@media (max-width:550px ) {
    width:290px;
    padding: 10px 30px;
}
@media (max-width:370px ) {
    width:220px;
    padding: 10px 30px;
}
}
input[type=file] {
background-color: var(--secound-color);
color: white;
opacity: 0.9;
}
//class
.one-input{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
.currency{
    font-weight: bold;
}



`


const StyleButtonAdd = styled.div`
display: flex;
align-items: center;
background-color: var(--primary-color);
padding: 8px 20px;
width: 166px;
text-align: center;
cursor: pointer;
color: white;
margin-top: 20px;
border-radius: 7px;
transition: 0.6s;
display: flex;
justify-content: space-evenly;
:hover{
  opacity: 0.7;
}
p{
    padding: 0 10px ;
}
.MdPersonAddAlt{
    font-size: 25px;
}
@media (max-width:1160px) {  
margin: 10px;
           
}
`
export default FormAddShipping