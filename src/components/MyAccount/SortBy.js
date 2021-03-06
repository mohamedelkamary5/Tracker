import React ,{useState ,useEffect} from 'react'
import styled from "styled-components"
import { useTranslation } from "react-i18next";

const SortBy = ({setSortedField ,sortData ,sortName ,sortDuration ,sortpaymentDate,titleName ,titleDuration}) => {
  
  const { t } = useTranslation();

  const [stateDataSort ,setDataSort ] = useState({
    activeSort:null ,
    dataSort : [   
      {id:1 , name:" الاسم" , state:sortName  },
      {id:2 , name:" الحالة" ,state:sortData  },
      {id:3 , name:titleName , state:sortpaymentDate},
      {id:4 , name:titleDuration ,state:sortDuration},  
    ]
  })
  //start Active Class and state sort
  useEffect(() => {
    setDataSort(
      {...stateDataSort ,activeSort:stateDataSort.dataSort[0] }
    )
  }, [setDataSort ,])
   
  const HandelIndex = (index , item) =>{
    setDataSort(
      {...stateDataSort ,activeSort:stateDataSort.dataSort[index] }
    )
    // //start Active Class and state sort
    setSortedField(item.state)
    
  }
  const HandelClassName= (index) =>{
    if(stateDataSort.dataSort[index] ==stateDataSort.activeSort ){
      return "span active"
    }else{
      return "span unActive"
    }
  }
//end Active Class

  return (
    <StyleSortBy    >
      <p> {t("sort_by")} : </p>
      {stateDataSort.dataSort.map((item , index )=>{
        return (
          <div className='main-sort' key={index}>
             <span className={HandelClassName(index)} onClick={()=>HandelIndex(index , item)}>{item.name}</span>
          </div>
        )
      })}
      
      
  
    </StyleSortBy>
  )
}
const StyleSortBy = styled.div`
  display: flex;
  align-items: center;
  p{
    margin: 0 8px;
    font-weight: bold;
    color: var(--font);
  }
.span{
  margin-left: 11px;
  cursor: pointer;
}
.unActive{
  color: var(--font);
}
.active{
  color: var(--primary-color);
} 

`


export default SortBy