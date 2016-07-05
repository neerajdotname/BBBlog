'use strict';

import React, { Component } from 'react';
import {
  WebView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

export default class MainPanel extends Component {

  constructor() {
    super();
  }

  onMenuPress() {
    alert('clicked');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.onMenuPress}>
          Click me
        </Text>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

