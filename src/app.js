/**
 * app.js
 *
 * @summary   React App component
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

import Nav from './nav';
import Main from './main';

// MARK: - Declaration

class App extends Component {

  /**
   * Constructor
   */
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, title: 'Home', heading: 'Bootstrap starter template', lead: 'Use this document as a way to quickly start any new project.' },
        { id: 2, title: 'About', heading: 'All About Me', lead: 'I build websites and mobile apps using Facebook\'s React' },
        { id: 3, title: 'Contact', heading: 'Contact Me', lead: 'Here is how you can contact me.' }
      ],
      active: 1
    }
    this.setActiveObject = this.setActiveObject.bind(this);
    this.getActiveObject = this.getActiveObject.bind(this);
  } // ./constructor

  /**
   * Set Active Object
   * @param {integer} id 
   */
  setActiveObject(id) {
    this.setState({
      active: id
    });
  } // ./setActiveObject

  /**
   * Get Active Object
   * @return {object} 
   */
  getActiveObject() {
    var index = 0;
    const array = this.state.data;
    array.forEach((item, i) => {
      if (item.id === this.state.active) {
        index = i;
      }
    });
    return array[index];
  } // ./getActiveObject

  /**
   * Render
   */
  render() {
    const activeItem = this.getActiveObject();
    return (
      <div>
        <Nav data={this.state.data} active={this.state.active} setActiveObject={this.setActiveObject} />
        <Main data={activeItem} />
      </div>
    );
  } // ./render

} // ./App

// MARK: - Export

export default App;
