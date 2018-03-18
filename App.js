import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

import SideMenu from './components/SideMenu';


export default class App extends Component {
  
  render() {
    return (
      <SideMenu />
    );
  }
}

