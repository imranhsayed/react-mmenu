import React, { Component } from 'react';

class DesktopMenu extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <nav>
          <ul>
            {
              children.map(child => (
                <li>
                  <a href={child.props.href}
                  style = {
                    {
                      backgroundColor: child.props.success ? 'red' : 'black'
                    }
                  }
                  >{child.props.children} </a>
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