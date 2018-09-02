/**
 * nav-item.js
 *
 * @summary   React NavItem component
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 *
 * Created at     : 2018-09-01 08:00:00 
 * Last modified  : 2018-09-02 08:21:00
 */

// MARK: - Packages

import React, { Component } from 'react';

// MARK: - Components
// This component does not use any other components

// MARK: - Declaration

class NavItem extends Component {

  /**
   * Constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  } // ./constructor

  /**
   * Handle Click
   * @param {event} e 
   */
  handleClick(e) {
    console.log(e.target);
    this.props.setActiveObject(this.props.id);
  } // ./handleClick

  /**
   * Render
   */
  render() {
    return (
      <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
        <a className="nav-link" href="# " onClick={this.handleClick} >{this.props.title} {this.props.active ? <span className='sr-only'>(current)</span> : ''}</a>
      </li>
    );
  } // ./render

} // ./NavItem

// MARK: - Export

export default NavItem;
