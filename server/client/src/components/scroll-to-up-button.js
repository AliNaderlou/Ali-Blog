import React from 'react';
import { Link } from 'react-scroll';
import './styles/scroll-to-up-button.scss';

function ScrollToUpButton(props) {
  return (
    <Link
      to="FirstElement"
      smooth={true}
      duration={1000}
      containerId="portfolio-container"
      offset={-100}
    >
      <div className="scroll-to-up-container">
        <i className="icon fas fa-angle-up" />
      </div>
    </Link>
  );
}
export default ScrollToUpButton;
