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

export default class MainPanel extends Component {

  constructor() {
    super();
  }

  renderNavbar() {
    let menuButton =
      <TouchableOpacity
        style={styles.hamburgerIconContainer}
        onPress={() => this.props.onMenuPress()}>
        <Icon name={hamburgerIconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>

    return (
      <View
        style={styles.navBarContainer}>
        {menuButton}
        />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderNavbar()}
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

