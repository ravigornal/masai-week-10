import React from 'react';
import './App.css';
import ResponsiveDrawer from './components/Header'
import {BrowserRouter as Router,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePlayer from './components/CreatePlayer'
import AllPlayer from './components/AllPlayer'

function App() {
  return (
    <Router>    
      <div className="App">
        <Route path="/" exact component={ResponsiveDrawer}/>
        {/* <Route path="/create"  component={CreatePlayer}/>
        <Route path="/show" exact component={AllPlayer}/> */}
      </div>
    </Router>
  );
}

export default App;
