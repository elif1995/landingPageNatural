import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className="form-container">

      <form className='form-control'>
        <h1 style={{backgroundColor:'#fbae54', width: "100%", textAlign:'center', color:'#fff', fontWeight:'bold'}}>השאירי פרטים</h1>
        <label>שם</label>
        <input  name="name" type='text' />
        <label>מייל</label>
        <input  name="email" type='email' />
        <label>טלפון</label>
        <input  name="phone" type='phone' />
      </form>
    </div>
  )
}

export default Form