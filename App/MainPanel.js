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

  render() {
    let headers = {
      "X-DemoApp-Version": "20160629",
      "X-DempApp-UserAgent": "demoapp-react-native"
    }

    let url = "http:localhost:3000"

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

