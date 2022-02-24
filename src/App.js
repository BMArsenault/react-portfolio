import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'About': 
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      case 'Resume': 
        return <Resume/>;
      default: 
        return <About/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

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
