import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppBar from './src/components/AppBar';
import IntroScreen from './src/components/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView >
          <View>
            <AppBar />
            <IntroScreen />
          </View>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
export default App;
