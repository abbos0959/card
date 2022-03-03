import React from 'react'

export const CardMap = ({data,HandleDelete}) => {
   
  return (
    <div>

        {data.map((value)=>(
            <>
            <img src={value.img}/>
            <button onClick={()=>HandleDelete(value.id)}>Delete</button>
            </>
        ))}
    </div>
  )
}
