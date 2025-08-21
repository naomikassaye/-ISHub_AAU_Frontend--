import React from "react";

function Header() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#testimonial", label: "Testimonial" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="header">
      <nav className="nav">
        <a className="logo" href="#home">My Portfolio</a>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
