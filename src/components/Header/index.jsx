import React from "react";
import Logo from "./logo";
import "./main.scss";

const Header = () => {
  return (
    <header className="my-header">
      <a href="/" className="text-decoration-none">
        <Logo />
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link" aria-current="page">
            Início
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Sobre mim
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Portifólio
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link active">
            Vamos Conversar!
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
