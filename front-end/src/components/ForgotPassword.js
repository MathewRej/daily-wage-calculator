import React, { useState } from "react";
import './index.css'

const ForgotPassword = () => {
    const [values, setValues] = useState('')
    const [errors, setErrors] = useState('')
    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value,

    })
    }
    const handleSubmit = () => {
        
        let email ='';
        
        const emailFormat = /\S+@\S+\.\S+/
        if (values.email === '') {
            email = 'Enter your Email'
          }
          if (values.email && !emailFormat.test(values.email)) {
            email = 'Invalid email'
          }
          setErrors(
              email
          )
    }
    return(
        <div className="main">
            <div className="forgotpass-div">
                <div>
                    <h3>Forgot Password</h3>
                </div>
                <div>
                    <input name="email" 
                    className="place-field" 
                    type="text" 
                    placeholder="Email"
                    value={values.email} 
                    onChange ={(e) => handleChange(e)}  />
                    <br/>
                    {
                        errors.email ? <label style={{color: 'red'}}> {errors.email} </label> : null
                    }
                </div>
                <br/>
                <div>
                    <button className="send-mail" onClick={() => handleSubmit()}>
                        <labe>Send Email</labe>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default ForgotPassword;