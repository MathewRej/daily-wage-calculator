import React, {useState} from "react";
import Modal from "react-modal/lib/components/Modal";
import AddWork from "./AddWork";
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

const CommonModal = (props) =>{
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleModal = (value) =>{
      setModalIsOpen(value)
    }
    return(
        <div>
             <Modal isOpen = {props.modalIsOpen} 
              style={customStyles}>
              {props.content}
                
            </Modal>
            
        </div>
    )
}
export default CommonModal;