import React from 'react';
import { Link } from 'react-scroll';
import './styles/scroll-to-up-button.scss';

function ScrollToUpButton(props) {
  return (
    <Link
      activeClass="hide"
      to={props.to} 
      smooth={true}
      duration={1000}
      containerId={props.containerId}
      offset={-200}
      spy={true}
      isDynamic={true}
    >
      <div className="scroll-to-up-container">
        <i className="icon fas fa-angle-up" />
      </div>
    </Link>
  );
}
export default ScrollToUpButton;
