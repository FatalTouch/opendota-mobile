import React from 'react';
import { View, TextInput } from 'react-native';

const Home = () => (
  <View>
    <TextInput
      placeholder={'Search for a Player'}
      returnKeyType={'search'}
      autoCorrect={false}
    />
  </View>
);

export default Home;
