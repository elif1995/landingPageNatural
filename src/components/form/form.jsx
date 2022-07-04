import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className="form-container">

      <form className='form-control'>
        <h1 style={{backgroundColor:'#fbae54', width: "100%", textAlign:'center', color:'#fff', fontWeight:'bold', fontSize: '45px'}}>השאירי פרטים</h1>
        <label>שם</label>
        <input  name="name" type='text' />
        <label>מייל</label>
        <input  name="email" type='email' />
        <label>טלפון</label>
        <input  name="phone" type='phone' />
        <button type='submit' className='form-submit'><h1 style={{color:'#fff'}}>שלחי</h1></button>
      </form>
    </div>
  )
}

export default Form