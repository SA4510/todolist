import React, { useState } from 'react'

export default function Todolist() {
  const[activity,setactivity]=useState("");
  const [listData,setlistData]=useState([]);

  
  function addactivity(){
    //setlistData([...listData,activity])
    //console.log(listData)
    setlistData((listData)=>{
      const updatelist =[...listData,activity]
      console.log(updatelist)
      setactivity('');
      return updatelist

    })

  }
  function removeActivity(i){
    const updatelistData = listData.filter((elem,id)=>{
      return i!=id;
    })
    setlistData(updatelistData);
    
  }
  function removeAll(){
    setlistData([])
  }

  return (
    <>
    <div className='container'>
        <div className='header'>Todo list</div>
        <input type='text' placeholder='Add Activity' value={activity}onChange={(e)=>setactivity(e.target.value)}/>
        <button onClick={addactivity}>Add</button>
        <p className='list-heading'>Here is your list :{")"}</p>
        {listData!=[] && listData.map((data,i)=>{
          return(
            <>
            <p key={i}>
              <div className='listData'>{data}</div>
              <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
            </p>
            </>
          )
        })}
        {listData.length>=1 && 
        <button onClick={removeAll}>Remove All</button>}
     </div>
     
    </>
  )
}


