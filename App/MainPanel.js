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

export default class MainPanel extends Component {

  constructor() {
    super();
  }

  render() {
    let userAgent;

    if (Platform.OS === "ios") {
      userAgent = "demoapp-react-native-ios";
    } else {
      userAgent = "demoapp-react-native-android";
    }

    alert(userAgent);

    let headers = {
      "X-DemoApp-Version": "1.1",
      "X-DemoApp-UserAgent": userAgent
    }

    // ios
    // "HTTP_X_DEMOAPP_USERAGENT"=>"demoapp-react-native"


    let url = "http:localhost:3000"
    url = "http://192.168.43.104:3000"

    return (
      <WebView
      source={{uri: url, headers: headers }}
      />
    )
  }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

