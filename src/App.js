import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'About': 
        return <About/>;
      case 'Resume': 
        return <Resume/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      default: 
        return <About/>;
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
