import React from 'react'

export default function MemoCallback() {
    const [count,setCount]=React.useState(0)
    const memoValue=React.useMemo(()=>{
        return count*4562437890432473
    },[count])
    const callBack=React.useCallback((a,b)=>{
        return count*a*b
    },[count])
  return (
    <div>
        <h4>
            {count}
            <br />
            memo value {memoValue}
            <br />
            call back {callBack(2,4)}
        </h4>
        <button onClick={()=>setCount(count+1)}>
            Click
        </button>
    </div>
  )
}
