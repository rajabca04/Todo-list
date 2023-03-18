import React, { useState } from 'react'

export default function Todolist() {
    const [activity, setActivity] = useState("")
    const [listData, setListdata] = useState([])
    function AddActivity(){
        // setListdata([...listData,activity])
        // console.log(listData)

        setListdata((listData)=>{
            const updatedList = [...listData, activity]
            setActivity('')
            console.log(updatedList)
            return updatedList
        })
    }

    function removeAcivity(i){
        const updataedListData = listData.filter((Element, id)=>{
            return i!==id
        })
        setListdata(updataedListData)
    }
    function removeAll(){
        setListdata([])
    }
  return (
    <> 
        <div className="container">
            <div className='Header'>Todo List</div>
            <input type="text" placeholder="   Add Activity..." value={activity} onChange={(e)=>setActivity(e.target.value)} />
            <button onClick={AddActivity} >Add</button>
                {listData.length>=1 &&<p className='list-heading'>Here is your list :{")"}</p>}
            {listData!==[] && listData.map((data,i)=>{
                return(
                    <>
                        <p  key={i}>
                        
                            <div className='list-data'>
                            &nbsp;<span>{i}.&nbsp;</span>   {data}
                            </div>
                            
                        </p>
                        <div>
                                <button className='remove-btn' onClick={()=>removeAcivity(i)}>Remove</button>
                        </div>
                    </>
                    
                )
            })}
            {listData.length>=1 && <button  className='remove-btn-all' onClick={removeAll}>Remove All</button> }
            
        </div>
    </>
  )
}
