import React from 'react'
import styled from "styled-components";
import OtherClint from './OtherUser';
import { AiOutlineCopy } from 'react-icons/ai';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const TabelClient = (props) => {
    const { id  ,en_desc ,ar_desce ,sequence ,cost , months } = props
    
  return (
      
<StyleTabel>
    <Tabel>
        <Thead>
            <TrHead>
                
                <th > id</th>
                <th>الوصف بالعربي</th>
                <th>الوصف بالانجليز</th>
                <th>رقم التسلسل	</th>
                <th>التكلفه</th>
                <th>الشهور</th>

            </TrHead>
        </Thead>
        <Tbody>
            <TrBody >
                <td>{id}</td>
                <td>{ar_desce}</td>         
                <td>{en_desc}</td>
                <td>{sequence}</td>
                <td>{cost}</td>
                <td>{months}</td>
            </TrBody>
        </Tbody>
    </Tabel>

</StyleTabel>
  )
}
const StyleTabel = styled.div`
    padding: 33px;
    overflow-x: auto;
     width:100% ;
    @media (max-width:1180px) {
        padding: 0 0px;
    }
     &::-webkit-scrollbar{
        width: 0;   
    }


`
const Tabel = styled.table`
width: 100%;
text-align :center ;
border-spacing: 0px 20px;
padding: 10px 0;

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
background-color: white;

`
const TrBody = styled.tr`
position: relative;
td:first-child{
    display: flex;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width:750px ) {
        
    }
    .copy{
       
    }
    :hover{
        .copy{
            color: var(--primary-color);
        }
    }
    p{
        margin-left: 4px;
    }


}
td{
    padding: 15px;
    color: var(--font);
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
export default TabelClient