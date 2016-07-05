'use strict';

import React, { Component } from 'react';
import {
  WebView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class SidePanel extends Component {

  constructor() {
    super();
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
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

