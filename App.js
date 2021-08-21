import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigation from './src/navigation/MainNavigation';
import store from './src/redux';

const App = () => {

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
