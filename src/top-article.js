import React,{useEffect,useState} from 'react';
import './article.css'
import axios from './axios';
import {Link} from 'react-router-dom'
function Articlelist ()

{  const [header1,setheader]=useState([]);
  const [loading,setloading]=useState(true)
  useEffect(()=>
 {
  async function fetch()
  {
     const request=await axios.get("/cricketapi");
     const fetchdata=await request.data;
     
     setheader(fetchdata)
     setloading(false)
 
  }
  fetch()
  
  
 },[])
    if(loading) return  <h1>Loading...</h1>
    return(
        
        <>
        <div className="latest-article">
        <h1 >Latest Article</h1>
        </div>
        <div className="card mb-3">
        {
          header1.map((doc)=>
        <div className ="row">
        <div className="col-3">
        
         <img  className ="article" src={doc?.imgurl} alt="img"/>
        </div>
        <div className="col-9">
        <Link className="title" to ={`/pages/article/${doc?._id}`}>
        {doc?.title}
        </Link>
        </div>
         </div>  
         
          )
          }
       </div>
        
      </>  
    )
}
export default Articlelist;