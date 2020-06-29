import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./app/reducers";

import Tabs from "./app/components/TabNavigator";
import { setLocalNotification } from "./app/utils/helpers";



class  App extends Component {

  componentDidMount () {
    setLocalNotification()
  }
  render(){

    return (
      <Provider store = {createStore(reducer)}> 
        {/* <View style={styles.container}> */}
          {/* <Home/>
          <StatusBar style="auto" /> */}
          <Tabs/>
        {/* </View> */}
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App