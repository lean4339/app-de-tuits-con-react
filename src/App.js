import React,{useState,useEffect} from "react";
import Header from "./componentes/header/Header";
import {Container, Snackbar} from "@material-ui/core";
import SendTuit from "./componentes/SendTuit/SendTuit";
import ListTuits from "./componentes/listTuits/ListTuits";

function App() {
  const [toastProps,setToastProps]= useState({
    open: false,
    text: null
  })
  const [allTuits,setAllTuits] = useState([])
  const [reloadTuits,setReloadTuits] = useState(false);
  useEffect(() =>{
    let todosTuits = JSON.parse(localStorage.getItem("tuits"));
    setAllTuits(todosTuits);
    setReloadTuits(false);
  },[reloadTuits]) 
  const deleteTuit =(index)=>{
      allTuits.splice(index,1)
      setAllTuits(allTuits)
      localStorage.setItem("tuits",JSON.stringify(allTuits)); 
      setReloadTuits(true);    
  }
  return (
   <Container className="simuladorTuits" maxWidth={false}>
     <Header/>
     <SendTuit setToastProps={setToastProps} allTuits={allTuits}/> 
     <ListTuits allTuits={allTuits} deleteTuit={deleteTuit}/>
     <Snackbar anchorOrigin={{vertical:"top",horizontal:"rigth"}} open={toastProps.open} autoHideDuration={1000} message={<span id="message-id">{toastProps.text}</span>}/>
   </Container> 
  );
}

export default App;
