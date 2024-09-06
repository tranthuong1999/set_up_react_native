import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppBar from './src/components/AppBar';
import IntroScreen from './src/components/IntroScreen';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView >
        <View>
          <AppBar />
          <IntroScreen />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
