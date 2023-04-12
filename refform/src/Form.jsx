import React, { useRef, useState } from 'react'

function Form() {

    let [form,setForm]=useState('')

    let data = useRef()

    let sub =(e)=>{
        e.preventDefault()
        let name = data.current.name.value
        setForm(name)
        e.target.reset()
    }
    console.log(form)

  return (
    <div>   
        <form onSubmit={sub} ref={data}>
            <h1>Log In</h1>
        <input type="text" placeholder='name' name="name" className='one'/>
        <br/>
        <select>
            <option value="">--Gender--</option>
            <option value="">Male</option>
            <option value="">Female</option>
        </select>
        
        <select>
            <option value="">--Role--</option>
            <option value="">web devloper</option>
            <option value="">web designer</option>
            <option value="">React js</option>
        </select>
            <br/>
            <h1>Status:</h1>
        <input type="checkbox" className='check'/><span>single</span>
        <input type="checkbox" className='check' /><span>married</span>
        <br/>

       <button>Submit</button>
        </form>
    </div>
  )
}

export default Form
