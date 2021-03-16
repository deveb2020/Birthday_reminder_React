import React, { useState } from 'react'
import "../Style/App.css"
import List from '../Components/List'
import {Data} from "../Data/Data"


function App() {

  const [people, setPeople] = useState(Data);

  return (
    <div className="App">
      <h1 className="tittle">
         {people.length} Birthdays Today
      </h1>
      <List people={people}/>
      <button className="button" onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
