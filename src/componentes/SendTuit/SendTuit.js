import React, {useState} from "react";
import "./sendTuit.scss";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Moment from "moment";
import ModalContainer from "../modalContainer/ModalContainer";
import FormSendTuit from "../formSendTuit/FormSendTuit";

export default function SendTuit (props){
    const {setToastProps,allTuits} = props
 const [isOpenModal,setIsOpenModal] = useState(false);

 const openModal = ()=>{
     setIsOpenModal(true);
 }
 const closeModal = ()=>{
     setIsOpenModal(false);
 }

 const sendTuit = (event,formValue)=>{
    event.preventDefault();
    const {name, tuit} = formValue;
    let allTuitsArray = []
    if(allTuits){
        allTuitsArray = allTuits
    }
    if(name == " " || tuit == " "){
        setToastProps({
            open: true,
            text: "Todos los campos son obligatorios"
        });
    }else{
        setToastProps({
            open: true,
            text: "Tuit enviado correctamente"
        });
       formValue.time = Moment(); 
       allTuitsArray.push(formValue)
       localStorage.setItem("tuits",JSON.stringify(allTuitsArray));
       closeModal();
    }
    allTuitsArray= []
}
    return (
        <div className="sendTuit">
            <Fab className="sendTuit__abrirModal"
            color="primary" 
            aria-label="add" 
            onClick={openModal} >
                <AddIcon/>
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTuit sendTuit={sendTuit} />
            </ModalContainer>
        </div>
    )
}
