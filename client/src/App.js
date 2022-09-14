import './App.css';
import Textblock from './components/Textblock.js';
import React from "react";

var jsonFile = require('./data/data.json');

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
      <h1> Champions and their skills</h1>
      <div className='main-container'>
        {jsonFile.map(function (object, i) {
          return <Textblock
            name={object.name}
            class={object.class}
            set={object.set}
            skillName={object.skillName}
            skillDescription={object.skillDescription}
          />;
        })}
      </div>
    </div >
  );
}

export default App;
