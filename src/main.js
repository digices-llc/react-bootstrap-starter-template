/**
 * main.js
 *
 * @summary   React Main component
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

class Main extends Component {

  /**
   * Render
   */
  render() {
    return (
        <main role="main" className="container">
          <div className="starter-template">
            <h1>{this.props.data.heading}</h1>
            <p className="lead">{this.props.data.lead}</p>
          </div>
        </main>
    );
  } // ./render

} // ./Main

// MARK: - Export

export default Main;
