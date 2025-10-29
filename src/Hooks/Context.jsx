import React from 'react'
import { demoContext } from '../App'

export default function Context() {
    const taskContext=React.useContext(demoContext)
    console.log(taskContext)
  return (
    <div>
        <h2>{taskContext}</h2>
    </div>
  )
}
