import React from "react";
import {Grid} from "@material-ui/core";
import "./listTuits.scss";
import Tuit from "../Tuit/Tuit"

export default function listTuits(props){
    let {allTuits,deleteTuit} = props
    if(!allTuits || allTuits== null || allTuits.length == 0){
        return (
            <div className="listTuitsEmpty">
                <h2>No hay tuits</h2>
            </div>
        )
    }
    return(
        <div container spacing={3} className="listTuit">
            {
            allTuits.map((tuit,index)=>{
             return(<div key={index} item xs={4}>
                    <Tuit tuit = {tuit} indice = {index} deleteTuit={deleteTuit}/>
                    </div>
            )})
            }
        </div>
    )
    
}