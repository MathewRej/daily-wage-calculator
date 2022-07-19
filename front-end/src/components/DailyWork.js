import React, {useState} from "react";
import './index.css';
import Calendar from 'react-calendar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const DailyWork = () => {
    return(
        <div>
            <div>
            <Calendar/>
            </div>
            <div className="select-employs">
               <h4>Employees</h4> <select className="dailyemploys">
               <option value="" ></option>
                   <option value="man" >man</option>
                   <option value="maaan" >maaan</option>
               </select>
            </div>
            <div className="select-employs">
                <h4>Work Place</h4><select className="dailyemploys">
                <option value="aa" >aa</option>
                <option value="vv" >vv</option>
                <option value="ee" >ee</option>
                </select>

            </div>
            <div className="select-employs">
                <h4>Work Hours</h4>
                <select className="dailyemploys">
                <option value="half" >Half Day</option>
                <option value="full" >Full Day</option>
                </select>
            </div>
            <div className="select-employs"><h4>Amount</h4><input className="dailyemploys" name="amount" type="int"  />
                </div>
                <div>
                    <button className="add-amountbutton">Add</button>
                </div>

                <div>
                <table className="employtable">
              <tr>
                  <th>No.</th>
                  <th>Employ Name</th>
                  <th>Date</th>
                  <th>Work Place</th>
                  <th>Work Hours</th>
                  <th>Amount</th>
                  <th></th>
                  
              </tr>
              <tr>
                  <td>1 </td>
                  <td>aaaa</td>
                  <td>7689856789</td>
                  <td>nffnfn</td>
                  <td>4000</td>
                  <td>644</td>
                  <td> <button className="editbutton"><EditIcon/>
                      </button>
                      <button className="editbutton"><DeleteIcon/>
                          </button></td>
                 
              </tr>
              </table>
                </div>
        </div>
    )
}
export default DailyWork;