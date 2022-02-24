import React from "react";

const Nav = ({currentPage, handlePageChange}) => {

  return (
  <header className="sticky-top inline-flex flex-row container-fluid flex-row col-lg-12">
    <div className="inline-flex flex row">
      <h1 className="text-light"><a href="index.html">Brian Arsenault</a></h1>
    </div>
    <nav className="inline-flex flex row flex-end">
      <ul className="flex-row nav-list">
        <li className="flex nav-item"><a href="#" onClick={() => {handlePageChange('About')}} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
        </li>
        <li className="flex nav-item"><a href="#" onClick={() => {handlePageChange('Resume')}} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </li>
        <li className="flex nav-item"><a href="#" onClick={() => {handlePageChange('Portfolio')}} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>
        <li className="flex nav-item"><a href='#' onClick={() => {handlePageChange('Contact')}} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
      </ul>
    </nav>
</header>
  );
}

export default Nav;