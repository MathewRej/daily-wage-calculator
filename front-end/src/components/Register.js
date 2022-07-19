import { color } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import './index.css'

const Register = () => {
  const [response, setResponse] =useState({})
  const [values, setValues] = useState(
    Object.assign({
      name: '',
      email: '',
      password: '',
      confirmPassword:'',
      mobile: '',
    }),
  )
  const [errors, setErrors] = useState(
    Object.assign({
      name: '',
      email: '',
      password: '',
      confirmPassword:'',
      mobile: '',
    }),
  )
  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
    // setErrors({
    //   ...errors,
    //   [name]: '',
    // })
  }
  const handleSubmit = () => {
    
    let email = '';
    let password = '';
    let name = '';
    let mobile = '';
    let confirmPassword = '';

 
    const numFormat = /^[0-9]+$/
    const emailFormat = /\S+@\S+\.\S+/

    if (values.name === '') {
      name = 'Enter your Name'
    }
    if (values.name && values.name < 3) {
      name = 'Name must be more than 3 letters'
    }
    if (values.email === '') {
      email = 'Enter your Email'
    }
    if (values.email && !emailFormat.test(values.email)) {
      email = 'Invalid email'
    }
    if (values.password === '') {
      password = 'Enter your password'
    }
    if (values.password && values.password.length < 6) {
      password = 'Password must be 6 characters or more'
    }
    if (values.mobile === '') {
      mobile = 'Enter your Mobile Number'
    }
    if (values.mobile && values.mobile.length !== 10) {
      mobile = 'Mobile Number must be 10 digits'
    }
    if (values.mobile && !numFormat.test(values.mobile)) {
      mobile = 'Mobile Number must be digits'
    }
    if(values.confirmPassword===''){
      confirmPassword='Re-enter your Password'
    }
    if(values.confirmPassword !== values.password){
      confirmPassword='Password doesnt match'
    }
  
    setErrors({
      name,
      email,
      password,
      confirmPassword,
      mobile,
    });

    if( errors.name ===''  && errors.email==='' && errors.password==='' && confirmPassword==='' && errors.mobile===''){
      axios({
        method:'post',
        url:'http://localhost:4000/api/user/register',
        data: values
      }).then(resp => { 
        if(resp  && resp.data && resp.data.success) {
        setResponse({
              color: 'green',
              message: resp.data.message
            }
        )
        } else {
          setResponse({
            color: 'red',
            message: resp.data.message
          })
        }
      })
    }
  }

  return (
    <div className="main-div">
      <div className="sigup-div">
        <div>
          <h2>Sign Up</h2>
        </div>

        <div className="signup-div1">
        <div className="signup-details">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="signup-field"
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
          </div>
          <div>
          {errors.name ? <label style={{color:'red'}}>{errors.name} </label> : null}
          </div>
          <div  className="signup-details">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="signup-field"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
          </div>
          <div>
         
          {errors.email ? <label style={{color:'red'}}>{errors.email}</label> : null
          
          }
          </div>
          <div  className="signup-details">
         
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="signup-field"
            value={values.password}
            onChange={(e) => handleChange(e)}
          />
          </div>
          <div>

          
         
          {errors.password ? <label style={{color:'red'}}>{errors.password}</label> : null}
          </div>
          <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="signup-field"
            value={values.confirmPassword}
            onChange={(e) => handleChange(e)}
          />
          </div>
          <div>
            {errors.confirmPassword ? <label style={{color:'red'}}>{errors.confirmPassword}</label> :null}
          </div>
          <div  className="signup-details">
            
         
          <input
            name="mobile"
            type="tel"
            placeholder="Mobile No."
            className="signup-field"
            value={values.mobile}
            onChange={(e) => handleChange(e)}
          />
           </div>
           <div>

           
          
          {errors.mobile ? <label style={{color:'red'}}>{errors.mobile}</label> : null}
          </div>
        
        <div className="sigup-div2">
          <button className="login-button" onClick={() => handleSubmit()}>
            Sign Up
          </button><br/>
          <h3>
          {
            response.message ? <label style={{color: `${response.color}`}}>{response.message}</label> :null
          }</h3>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Register;
