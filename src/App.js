import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TestForm from './components/Testform';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <TestForm />
      <Footer />
    </div>
  );
}

export default App;
