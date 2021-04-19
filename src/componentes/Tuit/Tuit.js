import React from "react";
import {Card,CardContent} from "@material-ui/core";
import moment from "moment";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

import "./tuit.scss";

export default function Tuit(props){
    const {tuit: {name, tuit,time}, indice,deleteTuit}= props
    

    return(
        <Card className="tuit">
            <CardContent>
                <div className="headerTuit">
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={()=>{deleteTuit(indice)}}/>
                </div>
                <p>{tuit}</p>
                <div className="TuitFecha">
                    {moment(time).format("DD/MM/YYYY HH:mm")}
                </div>
            </CardContent>
        </Card>
    )
}