import axios from 'axios'
import React, { useState } from 'react'
import Days from 'react-calendar/dist/umd/MonthView/Days'
import './index.css'

const AddWork = (props) => {

  const [response, setResponse] =useState({})
  const [values, setValues] = useState(Object.assign({
    place:'',
    date:'',
    cost_day: ''
  }))
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]:  '',
    })
  }
    const handleSubmit =() => {
      let place, date, cost_day;
      if(values.place===''){
        place='Enter the Place'
      }
      if(values.date===''){
        date='Enter Date'
      }
      if(cost_day === ''){
        cost_day = 'Enter amount/day'
      }
      setErrors({
        place,
        date,
        cost_day
      })
      if(errors.place==='' && errors.date==='' && errors.cost_day===''){
        axios({
          method:'post',
          url: 'http://localhost:4000/api/work/addwork',
          data: values
        }).then(resp =>{
          if(resp && resp.data && resp.data.success){
            setResponse({
              color: 'green',
              message: resp.data.message
            })
            console.log('ddddddddd')
            props.handleModal(false)
            props.works()
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
    <div>
      <div className="add-work">
       <center> <h3>Add Work</h3></center>
      </div>
      <div className="workmain">
        <div className='add-placediv'>

          <input className="place-field" name="place" type="text" placeholder="Place"
          value={values.place}
          onChange={ (e)=> handleChange(e)}
        
          />
        <br/>
            { 
            errors.place ? <label className='add-workde' style={{color: "red" }}>{errors.place}</label> : null
          }
    
          
        </div>
        <div className='add-datediv'>
         
          <input className="place-field" name="date" type="text" placeholder="date" 
          value={values.date}
          onChange={ (e) => handleChange(e)}
          />
           <br/>
            {
              errors.date ? <label style={{color: "red" }}>{errors.date}</label> : null
            }
        </div>
        <div className="add-amountdiv">
              <input className="place-field" name="cost_day" type="int" placeholder='Enter amount/day'
              value={values.cost_day}
              onChange={ (e) => handleChange(e)} />
              <br/>
              {
              errors.cost_day ? <label style={{color: "red" }}>{errors.cost_day}</label> : null
              }
            </div>
      </div>
      <div className="add-empbutton">
        <button className="add-button" onClick={ () => handleSubmit()} >
            Add</button>
            <h3>
          {
            response.message ? <label style={{color: `${response.color}`}}>{response.message}</label> :null
          }</h3>

      </div>
    </div>
  )
}
export default AddWork;
