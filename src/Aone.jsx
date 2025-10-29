import React from 'react'

export default function Aone() {
    let a=10;
    let logo ="https://juniortoexpert.com/wp-content/uploads/naming-convention-snake-case-kebab-case-camel-case.png"
    console.log(a)
  return (
    <div>
        <h4 style={
          {
            border:"2px solid black",
            fontSize:"2rem"
          }
        }>
            Thanks for visit
        </h4>

        <img src={logo} alt="" />

        <h1>
            {a+90}
            <br />
            {Math.random()*800}
        </h1>
      

    </div>
  )
}
