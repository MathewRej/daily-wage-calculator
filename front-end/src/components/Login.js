import axios from 'axios'
import React, { useState } from 'react'
import './index.css'

const Login = () => {
  const [response, setResponse] = useState({})
  const [values, setValues] = useState(
    Object.assign({
      email: '',
      password: '',
    }),
  )
  const [errors, setErrors] = useState({})
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
    let email = ''
    let password = ''
    const emailFormat = /\S+@\S+\.\S+/

    if (values.email === '') {
      email = 'Enter your Email'
    }
    if (values.email && !emailFormat.test(values.email)) {
      email = 'Invalid email'
    }

    if (values.password === '') {
      password = 'Enter your Password'
    }

    setErrors({
      email,
      password,
    });

    if (errors.email === '' && errors.password === '') {

      axios({
        method: 'post',
        url: 'http://localhost:4000/api/user/login',
        data: values,
      }).then((resp) => {
        if (resp && resp.data && resp.data.success) {
          window.location.href = '/'
          localStorage.setItem('accessToken', resp.data.accessToken)
       
        } else {
          setResponse({
            color: 'red',
            message: resp.data.message,
          })
        }
      })
    }
  }
  return (
    <div className="main">
      <div className="login"> 
        <div className="signin">
          <div>
            <center>
              <h2>SIGN IN TO YOUR ACCOUNT</h2>
            </center>
          </div>

          <div className="login1">
            <div className="input-field">
              <div className="login-entry">
                <label className="label"> Email</label>
              </div>
              <div className="mob-field">
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="login-field"
                  value={values.email}
                  onChange={(e) => handleChange(e)}
                />
                <br />
                {errors.email ? (
                  <label style={{ color: 'red' }}>{errors.email}</label>
                ) : null}
              </div>
            </div>
            <div className="input-field">
              <div className="login-entry">
                <label className="label">Password</label>
              </div>
              <div className="mob-field">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="login-field"
                  value={values.password}
                  onChange={(e) => handleChange(e)}
                />
                <br />
                {errors.password ? (
                  <label style={{ color: 'red' }}>{errors.password}</label>
                ) : null}
              </div>
            </div>
          </div>
          <div className="loginb">
            <button className="login-button" onClick={() => handleSubmit()}>
              Login
            </button>
            <br />
            {response.message ? (
              <label style={{ color: `${response.color}` }}>
                {response.message}
              </label>
            ) : null}
          </div>
          <div className="signup-link">
            <center>
              {' '}
              <div>
                <a style={{ color: '	rgb(173, 216, 230)' }} href="/register">
                  Sign Up
                </a>
              </div>
              <div className="forgotpassword">
                <a
                  style={{ color: 'rgb(173, 216, 230)' }}
                  href="/forgotpassword"
                >
                  Forgot Password
                </a>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
