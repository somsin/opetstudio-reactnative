'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';

// import Screen from './Screen';

console.log('AppRender.native function');

const logo = require('../img/rayasem-logo-color.png');

export default function () {
  return (
    <View style={styles.content}>
      <View>
        <Image source={logo} />
      </View>
      <View>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#61BD8C'
  }
});
