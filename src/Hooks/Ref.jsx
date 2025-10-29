import React from 'react'

export default function Ref() {
    const [name,setName]=React.useState("")

    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const count=React.useRef(0)
    React.useEffect(()=>{
        count.current+=1
    },[name])
  return (
    <div>
        <input type="text" placeholder='Enter value' value={name} onChange={handleChange}/>
        <h4>
            {name}
            <br />
            count {count.current}
        </h4>
    </div>
  )
}
