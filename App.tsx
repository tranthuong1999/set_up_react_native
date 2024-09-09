import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AppBar from './src/components/AppBar';
import IntroScreen from './src/components/IntroScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View>
      <AppBar />
      <IntroScreen />
    </View>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Detail" component={IntroScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <SafeAreaView >
      <View>
          <AppBar />
          <IntroScreen />
        </View>
      </SafeAreaView> */}
    </Provider>
  );
}

const styles = StyleSheet.create({});
export default App;
