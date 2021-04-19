import React, {useState} from "react";
import {FormControl,FormGroup,TextField,Button} from "@material-ui/core"

import "./formSendTuit.scss";

export default function FormSendTuit(props){
    const {sendTuit} = props
    const [formValue, setFormValue]= useState({
        name: " ",
        tuit: " ",
        time: null
    })
    const onFormChange = event => {
        setFormValue ({
            ...formValue,
            [event.target.name]: [event.target.value]
        })
    }
    return (
        <div className="formSendTuit">
            <h2 className="formSendTuit__title">Enviar Tweet</h2>
            <form className="formSendTuit__form" onSubmit={(event)=>{sendTuit(event,formValue)}} onChange={(event)=> {onFormChange(event)}}>
            <FormControl>
                <FormGroup>
                    <TextField className="formSendTuit__formName" type="text" name="name" placeholder="Nombre usuario" margin="normal"/>
                </FormGroup>

            </FormControl>
            <FormGroup>
                <TextField className="formSendTuit__formTextArea" name="tuit" multiline rows="6" placeholder="Escribe tu tweet" margin="normal"/>
            </FormGroup>
            <Button type="submit">Enviar tweet</Button>
            </form>
        </div>
    )
}