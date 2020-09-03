import React from "react";

const MainNav = () => (
   <nav className="navbar sticky-top navbar-light bg-dark">
      <span className="navbar-brand mb-0 h1 text-white">Типа название</span>
      <ul className="nav">
         <li className="nav-item active">
            <a className="nav-link" href="/">
               Расписание
               <span className="sr-only">(current)</span>
            </a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="/members">
               Люди
            </a>
         </li>
         <li className="nav-item">
            <a className="nav-link" href="/courses">
               Программы
            </a>
         </li>
      </ul>
   </nav>
);

export default MainNav;
