import React from "react";

const Nav = ({currentPage, handlePageChange}) => {

  return (
  <header className="sticky-top">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h1 className="text-black"><a className="text-decoration-none" href="index.html">Brian Arsenault</a></h1>
        <div className="justify-content-end">
        <ul className="nav nav-tabs navbar-text navbar-right mb-2">
          <li className="nav-item d-flex flex-column text-center">
            <a href="#" onClick={() => {handlePageChange('About')}} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
          </li>
          <li className="nav-item d-flex flex-column text-center">
            <a href="#" onClick={() => {handlePageChange('Resume')}} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          </li>
          <li className="nav-item d-flex flex-column text-center">
            <a href="#" onClick={() => {handlePageChange('Portfolio')}} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
          </li>
          <li className="nav-item d-flex flex-column text-center">
            <a href='#' onClick={() => {handlePageChange('Contact')}} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
</header>
  );
}

export default Nav;