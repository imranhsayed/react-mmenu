import React, { Component } from 'react';

// Line 18 - User Defined attributes for conditional rendering

class DesktopMenu extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <nav>
          <ul>
            {
              children.map( (child, i) => (
                <li key={ child.props.href + i }>
                  <a href={child.props.href}
                  style = {
                    {
                      backgroundColor: child.props['data-success'] ? 'red' : 'none'
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
