import React, {useEffect,useState}from 'react'
import {useParams} from 'react-router-dom'
import axios from '../axios'
function Article()
{   const {id}=useParams()
    const [doc,setdoc]=useState({});
    useEffect(()=>
        { 
            async function fetch()
        {
          const request=await axios.get(`/cricketapi/${id}`)
          const fetchdata=  request.data;
          setdoc(fetchdata)
        }
        fetch()
      },[id] )
      
return(
    <div className="container-sm">
    <h1>{doc?.title}</h1>
    <img src={doc?.imgurl} className="img-fluid" alt="img"></img>
    <h1>{`by ${doc?.author}`}</h1>
    <p>{doc?.article}</p>
    </div>
    
)
}
export default Article;