

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';




export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
 
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='red'
        progress={this.state.progress}
  
      />
      
        <Navbar/>
        
<Routes>
<Route exact path="/" element={<News setProgress={this.setProgress} key="general" category="general" country='in' />}/>
<Route exact path="/general" element={<News setProgress={this.setProgress} key="general" category="general" country='in' />}/>
<Route exact path="/business"  element={<News setProgress={this.setProgress} key="business"category="business" country='in' />}/>
<Route exact path="/science" element={<News setProgress={this.setProgress}  key=" science" category="science" country='in' />}/>
<Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category="entertainment" country='in' />}/>
<Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category="health" country='in' />}/>
<Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports"category="sports" country='in' />}/>
<Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category="technology" country='in' />}/>
</Routes>
        
        </Router>
      
       
      </div>
    )
  }
}

