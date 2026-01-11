function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">Portfolio</div>

      <div className="nav-center">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>

        {/* Resume link */}
        <a
          href="https://drive.google.com/file/d/1-faL3B5q2nHOZW436fyoKsB97B49gftX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      <a href="#contact" className="nav-cta">
        Get in touch ✨
      </a>
    </nav>
  );
}

export default Navbar;
