/**
 * index.js
 *
 * @summary   Entry point for bootstrap starter template
 * @author    Roderic Linguri <linguri@digices.com>
 * @copyright 2018 Digices LLC
 * @license   MIT
 *
 * Created at     : 2018-09-01 08:00:00 
 * Last modified  : 2018-09-02 08:21:00
 */

 // MARK: - Packages

import React from 'react';
import ReactDOM from 'react-dom';

// MARK: - Components

import './index.css';
import App from './app';

// MARK: - Bootstrapper

ReactDOM.render(<App />, document.getElementById('root'));
