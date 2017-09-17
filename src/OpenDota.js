import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './stores';

const Opendota = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Open dota App</Text>
      </View>
    </Provider>
  );
};

export default Opendota;
