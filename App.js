import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./app/reducers";

import Home from "./app/components/Home";

export default function App() {
  return (
    <Provider store = {createStore(reducer)}> 
      <View style={styles.container}>
        <Home/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
