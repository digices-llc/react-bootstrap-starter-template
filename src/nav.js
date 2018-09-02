/**
 * nav.js
 *
 * @summary   React Nav component
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

import NavItem from './nav-item';

// MARK: - Declaration

class Nav extends Component {

  /**
   * Constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.renderLinks = this.renderLinks.bind(this);
  } // ./constructor

  /**
   * Render Links
   */
  renderLinks() {
    var links = [];
    const array = this.props.data;
    array.forEach(item => {
      links.push(<NavItem key={item.id.toString()} active={this.props.active === item.id ? true : false} title={item.title} id={item.id} setActiveObject={this.props.setActiveObject} />);
    });
    return links;
  } // ./renderLinks

  /**
   * Render
   */
  render() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href="# ">Starter Template</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              {this.renderLinks()}
            </ul>
          </div>
        </nav>
    ); // ./return

  } // ./render

} // ./Nav

// MARK - Export

export default Nav;
