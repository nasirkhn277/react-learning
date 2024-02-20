import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState({
    name: 'nasir',
    email: 'nasir@gmail.com',
    mobile: '9721214950',
    password: 'Nasir@123',
    confirmPassword: 'Nasir@1234'
  })

  const handleChange = (event) => {
    setValue({value, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => { 
     event.preventDefault();
     alert('---')
  }

  const submit = (event) => {
    event.preventDefault();
    document.getElementById('frm').submit();
  }
  
  return (
    <>
       <div className="login-block">
         <div className="left heroimg">
            <img src="/img/heroimg.jpg" width="100%" height="" alt=""/>
            <p>Is your smart clinic powered by AI?</p>
         </div>
         <form onSubmit={handleSubmit} id='frm'>
          <div className="login-wrapper right boxsizing parent_wrapper">
        
              <div className="welcom-log">
                Setup your acvalue. Go Clinically
              </div>
              <div className="form-field-wrap posrel parent_div">
                <div className="form-type">
                  <input type="text" name="username" className="frm-txtbox login-inputs boxsizing alphabet fldrequired" maxlength="50" placeholder="Your Name" value={value.name} onChange={handleChange} autocomplete="off" />
                  </div>
                  <div className="frm-er-msg"></div>
              </div>
              <div className="form-field-wrap posrel parent_div">
                <div className="form-type"><input type="text" onChange={handleChange} value={value.email} id="email" name="email" className="frm-txtbox login-inputs boxsizing fldrequired validate_email" placeholder="Email"  autocomplete="off" /></div>
          <div className="frm-er-msg"></div>
              </div>
              <div className="form-field-wrap posrel parent_div">
                <div className="form-type"><input type="text" maxLength={10} onChange={handleChange} id="mobile" value={value.mobile} name="mobile" className="frm-txtbox login-inputs boxsizing integer fldrequired validate_mobile" placeholder="Mobile" autocomplete="off" /></div>
          <div className="frm-er-msg"></div>
              </div>
              <div className="form-field-wrap posrel parent_div">
                <div className="form-type"><input type="password" onChange={handleChange} id="pass" name="pass" value={value.password} className="frm-txtbox login-inputs boxsizing fldrequired" placeholder="Create Password" autocomplete="off" /></div>
          <div className="frm-er-msg"></div>
              </div>
              <div className="form-field-wrap posrel parent_div">
                <div className="form-type"><input type="password" onChange={handleChange} value={value.confirmPassword} id="cpass" name="cpass" className="frm-txtbox login-inputs boxsizing fldrequired" placeholder="Confirm Password"  autocomplete="off" /></div>
                <div className="frm-er-msg"></div>
              </div>
              <div className="clr"></div>
              <div className="actionbuttons tmarg">
                <a style={{cursor:'pointer'}} onClick={submit}  className="primary loginbtn boxsizing save">Continue</a>
                <div className="clr"></div>
              </div>
                <div className="clr"></div>
      
          </div>
         </form>
         <div className="clr"></div>
      </div>
    </>
  )
}

export default App
