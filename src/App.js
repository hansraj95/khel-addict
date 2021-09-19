import React from 'react'
import Footer from './footer';
import Navbar from './navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { HashRouter, Switch, Route } from 'react-router-dom';
import Soccer from './pages/soccer';
import Cricket from './pages/cricket';
import  './App.css'
import Article from './pages/article';
import home from './pages/home';


function App()
{  
    return(
        <div className="box">
        
        <HashRouter>
        <Navbar />
        
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/Cricket' component={Cricket} />
          <Route exact path='/Soccer' component={Soccer} />
          <Route exact path='/pages/article/:id' component={Article} />
          
        </Switch>

        <Footer/>
      </HashRouter>
    </div>
    
    )
}
export default App;