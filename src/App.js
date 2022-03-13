import React from "react";
//import "./App.css";
import Cardlist from './Cardlist';
import { robots } from './Robots';
import SearchBox from './SearchBox';
function App(props) {
  return (
    <div className="tc">
    <h1>Robo Friend</h1>
    <SearchBox />
    <Cardlist robots={robots}/>
      
    </div>
    
  );
}

export default App;
