import React,{useEffect,useState} from "react";
import axios from "./axios";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {Link} from 'react-router-dom'
import './header.css'
function Header ()
{  
  const [doc,setdoc]=useState([]);
  const [loading,setloading]=useState(true)
 useEffect(()=>
{
 async function fetch()
 {
    const request=await axios.get("/cricketapi");
    const fetchdata=await request.data;
    
    setdoc(fetchdata[Math.floor(Math.random()*(fetchdata.length-1))])
    setloading(false)

 }
 fetch()
 
 
},[])
    if(loading) return  <h1>Loading..</h1>
    return(
        <div class="card mb-3">
  <img src={doc?.imgurl} class="card-img-top" alt="img"/>
  <div class="card-body">
    <h5 class="card-title"><Link className="title" to ={`/pages/article/${doc?._id}`}>{doc?.title}</Link></h5>
  
  </div>
</div>
    )
}
export default Header
