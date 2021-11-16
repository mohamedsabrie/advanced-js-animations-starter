function Navbar() {
  return (
    <nav className="navbar section ">
      <div className="navbar__logo">
       SABRY
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="/">Our values</a>
        </li>
        <li className="navbar__link">
          <a href="/">Project</a>
        </li>
        <li className="navbar__link">
          <a href="/">Blog</a>
        </li>
        <li className="navbar__link">
          <a href="/">Contact</a>
        </li>
        
      </ul>
      <div className="navbar__mobile">
        <span></span>
        <span></span>
        <span></span>
      </div>


    </nav>
  );
}

export default Navbar;
