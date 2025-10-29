import React from 'react'

export default function Reducer() {
    const [a,b]=React.useReducer((state,action)=>{
        if(action.type==="addition"){
            return {count:state.count+1}
        }
        else if(action.type==="minus"){
            return {count:state.count-2}
        }
    },{count:0})
  return (
    <div>
        <h4>
            Reducer &nbsp;
            {a.count}
        </h4>
        <button onClick={()=>b({type:"addition"})}>
            Add
        </button>
        <button onClick={()=>b({type:"minus"})}>
            Less
        </button>
    </div>
  )
}
