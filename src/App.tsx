import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import MissionVision from './components/MissionVision/MissionVision';
import Staff from './components/Staff/Staff';
import Services from './components/Services/Services';
import Facilities from './components/Facilities/Facilities';
import Testimonials from './components/Testimonials/Testimonials';
import Map from './components/Map/Map';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
        <Home />
        <MissionVision />
        <Staff />
        <Services />
        <Facilities />
        <Testimonials />
        <Map />
        <Contacts />
      </header>
    </div>
  );
}

export default App;
