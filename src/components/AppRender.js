'use strict';
import React from 'react';
// import Screen from './Screen';

console.log('AppRender.js Ivoked');

const logo = require('../img/rayasem-logo-color.png');

export default function () {
  console.log('AppRender function');
  return (
    <div style={styles.content}>
      <div>
        <img alt='logo' src={logo} />
      </div>
      <div>
        <button>Learn More</button>
      </div>
    </div>
  );
}

const styles = {
  content: {
    backgroundColor: '#61BD8C'
  }
};
