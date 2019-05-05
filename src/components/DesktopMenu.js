import React, { Component } from 'react';
import './../desktop.css';

// TODO:
// Line 18 - User Defined attributes for conditional rendering
// 1 - Use index instead of i
// 2 - Proper Spacing

class DesktopMenu extends Component {
  render() {
    const { children, direction } = this.props;
  
    let navClass = '';
    switch ( direction ) {
      case "right": navClass = 'rmm-desktop--right'
      break;

      case "left": navClass = 'rmm-desktop--left'
      break;

      default: navClass = '';
    }

    return (
      <div>
        <nav className="rmm-desktop__nav">
          <ul className={`rmm-desktop__list ${ navClass }`}>
            {
              children.map( (child, i) => (
                <li 
                key={ child.props.href + i } className="rmm-desktop__item">
                  <a 
                  className="rmm-desktop-link" 
                  href={ child.props.href } >{ child.props.children } </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    )
  }
};

export default DesktopMenu;
