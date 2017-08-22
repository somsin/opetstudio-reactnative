'use strict';

import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import Screen from './Screen';

// const logo = require('../img/rayasem-logo-color.png');

export default function () {
  return (
    <View style={styles.content}>
      <View>
        <Text>Home Page Mobile</Text>
      </View>
      <View>
        <Button
          onPress={() => { Actions.about(); }}
          title="About"
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
