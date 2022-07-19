import React, {useEffect, useState} from "react";
import './index.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-modal';
import AddWork from "./AddWork";

import axios from "axios";
import CommonModal from "./CommonModal";

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       padding: '0px',
//       margin: '0px',
//       border: '0px',
//       width: '500px',
//     },
//     overlay:{
//       background: 'rgb(58 55 55 / 75%)',
//       zIndex: 10
//   }
//   };
 
const WorkDetails =()=> {
  const [workData, setWorkData] = useState([]);
  
  
  useEffect(()=> {
    works();
  },[]);

  const works = () =>{
    axios({
      method:'get',
      url:'http://localhost:4000/api/work/workdetails',
    }).then(resp =>{
      console.log('resp: ', resp);
      if(resp && resp.data && resp.data.data){
        setWorkData(resp.data.data);
      }
    })
  }
  const updateWork = () =>{
    setModalIsOpen(true)
  }


    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleModal = (value) =>{
      setModalIsOpen(value)
    }
    const deletework = (id) => {
      axios({
        method:'post',
      url:'http://localhost:4000/api/work/deletework',
      data: {id}
      }).then(resp =>{
        console.log('hhhit',resp)
        if(resp && resp.data && resp.data.success){
          works()
        }
      })
    }
  
  

    return(
        <div className="work-detailsdiv">
          <CommonModal modalIsOpen= {modalIsOpen}  content = {<AddWork />} onRequestClose ={ () => handleModal(false)} />
            <div className="work-detailstable">
              <button className="add-placebutton" onClick={()=>handleModal(true)} >     
             <AddIcon />
            </button></div>
            {/* <Modal isOpen = {modalIsOpen} onRequestClose ={ () => handleModal(false)}
            style={customStyles}>
                <AddWork handleModal = {handleModal} works = {works} />
            </Modal> */}
            <div>
            <table className="employtable">
              <tr>
                  <th>No.</th>
                  <th>Place</th>
                  <th>Starting Date</th>
                  <th>Amount/day</th>
                  <th>Action</th>
                  
              </tr>
              {workData && workData.length>0 && workData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index +1}</td>
                    <td>{item.place}</td>
                    <td>{item.date}</td>
                    <td> {item.cost_day}</td>
                    <td>
                      <button className="editbutton" onClick={ () => updateWork()}><EditIcon/></button>
                      <button className="editbutton" onClick={()=>deletework(item.id)}><DeleteIcon/>
                      </button>
                    </td>
                  </tr>
                )})} 
              </table>
            </div>

        </div>
    )
}
export default WorkDetails;