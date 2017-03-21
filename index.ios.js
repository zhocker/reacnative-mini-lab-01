/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var SearchPage = require('./SearchPage');

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class PropertyFinder extends Component {

  render() {

    return (
      <NavigatorIOS style={styles.container} initialRoute={{ component: SearchPage, title: 'Property Finder'}}/>
    );
  }
}


AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
