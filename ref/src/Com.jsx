import React, { useEffect, useRef } from 'react'

function Com() {

    let num = useRef(0)

   let add=()=>{
    num.current.focus()
    console.log(num.current.value)
   }

  return (
    <div>
        <input type="text" ref={num}/>
        <button onClick={add}>click</button>
    </div>
  )
}

export default Com