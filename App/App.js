'use strict';

import React, { Component } from 'react';
import {
  WebView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Platform
} from 'react-native';

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    let userAgent;

    if (Platform.OS === "ios") {
      userAgent = "demoapp-react-native-ios";
    } else {
      userAgent = "demoapp-react-native-android-agent";
    }

    let headers = {
      "X-DemoApp-Version": "1.1",
      "X-DemoApp-UserAgent": userAgent
    }

    let url;
    if (Platform.OS === 'ios') {
      url = "http:localhost:3000"
    } else {
      url = "http://192.168.43.104:3000"
    }

    return (
      <WebView source={{uri: url}} />
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

