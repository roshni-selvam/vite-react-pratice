import React from 'react'

export default function State() {
    const [name,setName]=React.useState("Roshni")
    const [num,setNum]=React.useState(0)
    function handleClick(){
        setName("Roshni MA")
        setNum(num+1)
    }

    function less(){
        setNum(num-1)
    }
    function resetDemo(){
        setNum(0)
    }

    React.useEffect(
        ()=>{
            document.title="count is "+num
        },[num]
    )

    const breakPoint=600;
    const screen=(window.innerWidth<=breakPoint);
    React.useLayoutEffect(
        ()=>{
            const handleSize=()=>{
                if(screen){
                    console.log("mobile screen size")
                }
                else{
                    console.log("desktop size")
                }
            }

            window.addEventListener("resize",handleSize)
            handleSize();
            return ()=> window.removeEventListener("resize",handleSize)
        },[screen]
    )
  return (
    <div>
        <h3>
            {name}
            <br />
            Number {num}
        </h3>
        <button onClick={handleClick}>
            click to add
        </button>
        <button onClick={less}>
            click to less
        </button>
        <button onClick={resetDemo}>
            click to reset
        </button>
    </div>
  )
}
