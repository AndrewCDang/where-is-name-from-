import './App.css';
import WorldMap from './components/worldmap';
import Input from './components/input';
import React, { useState, useRef, useEffect} from 'react';
import Results from './components/results';
import DisplayResults from './components/displayResults';
import PieChart from './components/pieChart';
import Transitions from './components/transitions'

function App() {
  const [name, setName] = useState('');
  const [countries, setCountries] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        {/* Map */}
        <WorldMap name={name} countries={countries}/>
        {/* Input/Data content */}
          <div className="Aside-section">
            <Input  name={name} setName={setName}/>
            <Results name={name} setCountries={setCountries} countries={countries}/>
            <DisplayResults name={name} countries={countries} />
            <PieChart countries={countries}/>
            <Transitions />
          </div>
      </header>
    </div>
  );
}

export default App;
