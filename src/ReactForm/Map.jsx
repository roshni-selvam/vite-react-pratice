import React from 'react'

export default function Map() {
    let ar=["html","css","js",'ID','FirstName','LastName','Email','Age','Country',
'1','Emma','Smith','emma.smith@example.com','28','USA',
'2','Liam','Johnson','liam.johnson@example.com','34','Canada',
'3','Olivia','Williams','olivia.williams@example.com','22','UK',
'4','Noah','Brown','noah.brown@example.com','45','Australia',
'5','Ava','Jones','ava.jones@example.com','30','USA',
'6','Elijah','Miller','elijah.miller@example.com','37','Germany',
'7','Sophia','Davis','sophia.davis@example.com','29','France',
'8','James','Garcia','james.garcia@example.com','26','Spain',
'9','Isabella','Martinez','isabella.martinez@example.com','33','Italy',
'10','Benjamin','Lopez','benjamin.lopez@example.com','40','Mexico',
]
  return (
    <div>
        <ol>
            {
                ar.map((item,index)=>{
                    return(
                        <li key={index}>
                           <u>
                             {item}
                           </u>
                        </li>
                    )
                })
            }
        </ol>
    </div>
  )
}
