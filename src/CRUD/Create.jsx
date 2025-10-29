import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Create({link}) {

    // console.log(link)
    const [data,setData]=useState({
        user:"",
        age:""
    })

    const [viewData,setViewData]=useState([])
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setData({...data,[name]:value})
    }

    const loadForm=(e)=>{
        e.preventDefault()
        console.log(data.user,data.age)
        axios.post(link,data).then((s)=>{
            console.table(s.data)
            alert("Data saved!!!")
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        axios.get(link).then((s)=>{
            // console.table(s.data)
            setViewData(s.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[link,viewData])

const remove=(id)=>{
    console.log(link+"/"+id)
    axios.delete(link+"/"+id).then(()=>alert("data deleted!!!")).catch((err)=>console.log(err))
}

const ed=(item)=>{
    console.log(item)
    let updatName=prompt("Enter update name here")
    let updateAge=prompt("Enter update age")
    axios.put(link+"/"+item.id,{user:updatName,age:updateAge}).then(()=>alert("data updated!!!")).catch((err)=>alert(err))
}
  return (
    <div>

        <form onSubmit={loadForm}>
            <input type="text" placeholder='Enter name here'  value={data.user} name='user' onChange={handleChange}/>
            <input type="number" placeholder='Enter age here' value={data.age} name='age' onChange={handleChange}/>
            <input type="submit" />
        </form>
        
        <ol>
            {
                viewData.map((item,index)=>{
                    return(
                        <li key={index}>
                            {item.user},{item.age}
                            <br />
                            <button onClick={()=>remove(item.id)}>&#x2715;</button>
                            <button onClick={()=>ed(item)}>&#x270E;</button>
                        </li>
                    )
                })
            }
        </ol>
    </div>
  )
}
