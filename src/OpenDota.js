import React from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import Router from './Router';

const Opendota = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default Opendota;
