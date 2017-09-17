/*
 * Copyright (C)2017 Neurosystems Technologies Pvt. Ltd.. All Rights reserved. This material
 * contains confidential and proprietary information of Neurosystems Technologies Pvt. Ltd.
 * Any disclosure, reproduction, dissemination or distribution of the material
 * contained herein is strictly prohibited.
 */

import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/screens/Home';
import SearcResultScreen from './components/screens/SearchResult';

const MainNavigator = StackNavigator({
  home: {
    screen: HomeScreen
  },
  searchresult: {
    screen: SearcResultScreen
  }
}, {
  headerMode: 'none'
});

const Root = () => (
  <View style={{ flex: 1 }}>
    <MainNavigator />
  </View>
);


export default Root;
