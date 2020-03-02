import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Testform from './components/Testform';
import Hero from './components/Hero';
import Services from './components/Services';
import Register from './components/Register';
import Contact from './components/Contact';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Testform />
      <Footer />
    </div>
  );
}

export default App;
