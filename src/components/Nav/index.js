import React from "react";

const Nav = ({currentPage, handlePageChange}) => {

  return (
  <header className="sticky-top flex-row">
    <div className="flex-row px-1">
      <h1 className="text-light"><a href="index.html">Brian Arsenault</a></h1>
    </div>
    <nav>
      <ul className='flex-row'>
        <li className="mx-2"><a href="#" onClick={() => {handlePageChange('About')}} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
        </li>
        <li className="mx-2"><a href="#" onClick={() => {handlePageChange('Resume')}} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </li>
        <li className="nav-item d-flex flex-column"><a href="#" onClick={() => {handlePageChange('Portfolio')}} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
        </li>
        <li className="nav-item d-flex flex-column"><a href='#' onClick={() => {handlePageChange('Contact')}} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
      </ul>
    </nav>
</header>
  );
}

export default Nav;