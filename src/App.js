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
    <>
    <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
    <main id="main">
      {renderPage()}
    </main>
    <Footer></Footer>
  </>
);
}

export default App;
