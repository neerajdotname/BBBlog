'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Drawer from 'react-native-drawer';
import MainPanel from './MainPanel';


export default class App extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<SidePanel />}
        >
        <MainPanel />
      </Drawer>

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

