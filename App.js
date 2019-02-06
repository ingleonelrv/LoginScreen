/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';

import Splash from './src/splash/component/splash'
import Login from './src/login/component/login'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Login />
    );
  }
}