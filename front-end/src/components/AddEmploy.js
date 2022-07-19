
import React, { useState } from 'react'
import EmployDetails from './EmployDetails';
import './index.css'
import axios from 'axios'

const AddEmploy = () => {
  const [addEmployData, setAddEmployData] = useState({
    name:'mathu',
    mobile:'',
    amount:'',
  })





  const [values, setValues] = useState(
    Object.assign({
      name: '',
      mobile: '',
      amount:'',
    }),
  )
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }
    const handleSubmit = () => {
      let name, mobile,amount;
      const numFormat = /^[0-9]+$/
      if (values.name === '') {
        name = 'Enter your Name'
      }
      if (values.name && values.name < 3) {
        name = 'Name must be more than 3 letters'
      }

      if (values.mobile === '') {
        mobile = 'Enter your Mobile Number'
      }
      if (values.mobile && values.mobile.length !== 10) {
        mobile = 'Mobile Number must be 10 digits'
      }
      if (values.mobile && !numFormat.test(values.mobile)) {
          mobile='Mobile Number must be digits'
        }
        if(values.amount === ''){
          amount = 'Amount'
        }
        setErrors({
            name,
            mobile,
            amount,
        });
        if(errors.name==='' && errors.mobile==='' && errors.amount==='' ){
            axios({
              method: 'post',
              url:'http://localhost:4000/api/user/addwork',
              data: values
            })
        }
    }
  
  return (
    <div className='add-employy'>
      <div className='addemp-heading'><center><h3>Add Employ</h3></center></div>
      <form >
      <div className="add-employname">
        <input className="signup-field" name="name" type="text" value={values.name} placeholder="Name" onChange= {(e) =>  
            handleChange(e)} />
        <div>
        {
            errors.name ? <label style={{color: "red" }}>{errors.name}</label> : null
        }
        </div>
        <div>
        <input className="signup-field" name="mobile" type="tel" value={values.mobile}placeholder="Mobile No." onChange= {(e) =>  
            handleChange(e)
           
          }/>
        </div>

        <div>
        {
            errors.mobile ? <label style={{color: "red" }}> {errors.mobile}</label> : null
        }
        </div>
        <div>
        <input 
          className="signup-field" 
          name= "amount" type="int" 
          value={values.amount} 
          placeholder="Amount" 
          onChange= {(e) => 
            handleChange(e)
           
          }
        />
        <div>
        {
            errors.amount ? <label style={{color: "red" }}>{errors.amount}</label> : null
        }
        </div>


        </div>
      </div>
      </form>
      <div className="add-empbutton">
        <button className="add-button"  onClick={() => handleSubmit()  }>
            Add</button>
      </div>
    </div>
  )
    }

export default AddEmploy;
