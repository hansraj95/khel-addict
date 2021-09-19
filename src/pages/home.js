import React from 'react'
import Header from '../header'
import Articlelist from '../top-article'
import './home.css'

function home() {
    return (
        <div className="container-sm">
          <Header/>
          <Articlelist/>  
        </div>
    )
}

export default home
