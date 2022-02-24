import React from "react";

const Nav = ({currentPage, handlePageChange}) => {

  return (
<header className='sticky-top flex-row'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 className="text-light"><a href="index.html">Brian Arsenault</a></h1>
      <button className="btn-light" type="button">
        <span className="navbar-icon"></span>
      </button>
      <div className="justify-content-end" id="navbarNav">
        <ul className='flex-row ms-auto mb-2 mb-lg-0'>
          <li className='nav-item d-flex flex-column text-center'><a 
                href="#" 
                onClick={() => {handlePageChange('About')}} 
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-user"></i> 
                <span>About</span>
              </a></li>
          <li className='nav-item d-flex flex-column text-center'><a 
                href="#" 
                onClick={() => {handlePageChange('Resume')}} 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-file-blank"></i> 
                <span>Resume</span>
              </a></li>
          <li className='nav-item d-flex flex-column text-center'><a 
                href="#" 
                onClick={() => {handlePageChange('Portfolio')}} 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-book-content"></i> 
                <span>Portfolio</span>
              </a></li>
          <li className='nav-item d-flex flex-column text-center'><a 
                href='#'
                onClick={() => {handlePageChange('Contact')}} 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-envelope"></i> 
                <span>Contact</span>
              </a></li>
        </ul>
      </div>
    </div>
    </nav>
</header>
  );
}

export default Nav;