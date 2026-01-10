function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">Portfolio</div>

      <div className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#resume">Resume</a>
      </div>

      <a href="#contact" className="nav-cta">
        Get in touch ✨
      </a>
    </nav>
  );
}

export default Navbar;
