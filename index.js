import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import configureStore from './reduxStore/configureStore';

const store = configureStore();

const RNRedux = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
