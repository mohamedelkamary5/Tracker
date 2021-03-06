import React from 'react'
import styled from "styled-components"
import { BiDotsHorizontalRounded } from 'react-icons/bi';

import { Link } from "react-router-dom";
const GlopalTabel = ({dataTabel}) => {
   

           
  return (
    <MainTabel>
        <Tabel>
        <Thead>
            <TrHead>
                <th>{dataTabel.title1}</th>
                <th>{dataTabel.title2}</th>
                <th>{dataTabel.title3}</th>
                <th>{dataTabel.title4}</th>
                <th>{dataTabel.title5}</th>
                <th>{dataTabel.title6}</th>
                <th>{dataTabel.title7}</th>
                <th>{dataTabel.title8}</th>
                <th>{dataTabel.title9}</th>
            </TrHead>
            </Thead>
            <Tbody>
        {dataTabel.LoopData.map((user , index) =>{
            return (
                <TrBody key={index}>

                    <td><Link to={`/Customers/clint/${dataTabel.title1}`}><img src={dataTabel.title1} alt="logo" /> </Link></td>
                    <td>{user.name}</td>
                    <td>{dataTabel.title1}</td>
                    <td>{dataTabel.title1}</td>
                    <td>{dataTabel.title1}</td>
                    <td>{dataTabel.title1} اشهر</td>
                    <td>{dataTabel.title1} </td>
                    <td ><span className={user.state === t("active") ? "green" : "red"}>{dataTabel.title1}</span></td>
                    <td >
                     <BiDotsHorizontalRounded className='BiDotsHorizontalRounded'/>
                     <div className='select-clint'>
                     <Link to={`/Customers/clint/${dataTabel.title1}`}>التفاصيل</Link>
                     <Link to={`/Customers/clint/${dataTabel.title1}`}>بيانات العميل</Link>
                     </div>
                    </td>
                </TrBody>
            )
        })}
        </Tbody>
        
        </Tabel>
    </MainTabel>
  )
}
const MainTabel = styled.div`
    overflow-x: auto;
     width:100% ;
     height: 84vh;
    padding:  50px;
    

    @media (max-width:1180px) {
        padding: 0 0px;
    }
     &::-webkit-scrollbar{
        width: 0;   
    }


`
const Tabel = styled.table`
    text-align: center;
    border: 0px;
    border-spacing: 0px 20px;
    align-items: center;
    width:100% ;
    margin: 0;
    padding: 0;
    @media (max-width:1180px) {
        padding: 0 10px;
    }
    @media (max-width:770px ) {
     margin-top: 10px;
     padding: 0 0px;
    }
  

`
const Thead = styled.thead`
background-color:var(--secound-color);
color: white;

`
const TrHead = styled.tr`

th{
    padding: 10px 30px;
    @media (max-width:720px) {
     font-size: 13px;
     padding: 10px 40px;
    }
}
`
const Tbody = styled.tbody`
    border-radius: 10px;
    
`
const TrBody= styled.tr`
padding: 10px 5px;
border-top: 10px solid #ebebebe6;

td {
    background-color: white;    
    
    color: var(--font);
    font-size: 17px;
    &:first-child{
        border-radius: 0px 10px 10px 0;
    }
    &:last-child{
        border-radius: 10px 0px 0px 10px;
    }
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .BiDotsHorizontalRounded{
        margin-top: 10px;
        font-size: 30px;
        cursor: pointer;

    }
    @media (max-width:720px) {
     font-size: 15px;
     
    }
}
td:last-child{
    position: relative;
    &:hover{
        .select-clint{
            transform: scale(1);
            transform-origin: 0 100% 100% 100% ;
        }  
    }
    .select-clint{
        box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.46);
        -webkit-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.40);
        -moz-box-shadow: -2px 5px 13px -4px rgba(0,0,0,0.30);
        position: absolute;
        transform: scale(0);
        transform-origin: 20% 40%;
        left: 20px;
        top: 40px;
        z-index: 4;
        width: 100px;
        display: flex;
        flex-direction: column;
        background-color: white;
        transition: 0.4s;    
        a{
            font-size: 14px;
            font-weight: bold;
            color: var(--font);
            cursor: pointer;
            padding: 5px 0;
            &:nth-child(1){
                border-bottom: 1px solid black;
            }

        }
    }
}


.red{
    color: var(--danger-color);
    font-weight: bold;
    background-color: #ff000015;
    padding: 10px;
    border-radius:30px ;
        
    }
.green{
    color: var(--succes-color);
    font-weight: bold;
    background-color: #00800015;
    padding: 10px;
    border-radius:30px ;
}

`
export default GlopalTabel