
import React, { useState } from "react";
import './index.css';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
//import AddEmploy from "./AddEmploy";
import AddIcon from '@mui/icons-material/Add';
import AddEmploy from "./AddEmploy";
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
      margin: '0px',
      border: '0px',
      width: '500px',
    },
    overlay:{
        background: 'rgb(58 55 55 / 75%)',
        zIndex: 10
    }
  };

const EmployDetails =() => {
   const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className="emp-detailsdiv">
            <div className="employ-detailstable">
            <div className="add-employdiv">
            <button className="add-employbutton"
            onClick={ ()=> setModalIsOpen(true)}> 
               
             <AddIcon/>
             
            </button> 
            
            <Modal 
                isOpen= {modalIsOpen} 
                onRequestClose = {() => setModalIsOpen(false)}
                style={customStyles}
            >
                <AddEmploy/>

            </Modal>
            </div>
                <table className="employtable">
              <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>mobile</th>
                  <th>Amount</th>
                  <th></th>
                  
              </tr>
              <tr>
                  <td>1 </td>
                  <td>aaaa</td>
                  <td>7689856789</td>
                  <td>4000</td>
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
export default EmployDetails;