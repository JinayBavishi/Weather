import logo from './logo.svg';
import './App.css';
import Weathercard from './component/Weathercard0';
import Temp from "./component/temp"
import React, { useState, useEffect } from 'react';
import { DriverRemoteConnection } from 'gremlin';
const addVertexQuery = `g.addV('person').property('name', 'Alice')`;


function App() {
  const [dark, setMode] = useState(false)
  const connection = new DriverRemoteConnection({
  traversalSource: 'g',
  mimeType: 'application/vnd.gremlin-v3.0+json',
  url: 'wss://<your-graph-server>:8182/gremlin'
    const executeQuery = async (query) => {
  const traversal = connection.getTraversal();
  try {
    const result = await traversal.V().limit(1).toList();
    console.log('Result:', result);
  } catch (err) {
    console.error(err);
  }
};

executeQuery(addVertexQuery);

});

  return (
    <>
      <div className={dark ? 'App dark-mode' : 'App'}>
        <center>

          <header className="App-header">
            <h1>5-Day Forecast</h1>
          </header>
          <Temp  {...dark}/>
          <br />
          <br />
          <br />
          <br />

          <div className='switch'>
            <input type="checkbox" onChange={() => setMode(!dark)} />
            Dark Mode
          </div>
          <h4 className='by'>By Jinay Bavishi</h4>
        </center>
      </div>
    </>
  );
}

export default App;
