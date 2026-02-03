import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">Portfolio</div>

        {/* Desktop links */}
        <div className="nav-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a
            href="https://drive.google.com/file/d/1-faL3B5q2nHOZW436fyoKsB97B49gftX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <a href="#contact" className="nav-cta desktop-only">
          Get in touch ✨
        </a>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a
            href="https://drive.google.com/file/d/1-faL3B5q2nHOZW436fyoKsB97B49gftX/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
