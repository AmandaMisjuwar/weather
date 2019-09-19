import React from 'react';
import './App.css';
import WeatherCardList from './WeatherCardList';
import RightPanel from './RightPanel'

function App() {
  return (
    <div className="App">
     <WeatherCardList />   
     <RightPanel />
    </div>
  );
}

export default App;
