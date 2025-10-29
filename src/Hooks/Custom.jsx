import React from 'react'

export default function Custom(initialState) {
    const [number,setNumber]=React.useState(initialState)
    const increment=()=>{
        setNumber(number+1)
    }
  return [number,increment]
}
