import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Landing } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/contact" component={ Contact } />
    </div>
  );
}

export default App;
