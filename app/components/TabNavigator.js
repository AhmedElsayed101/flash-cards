import React from 'react';
import { Text, View,  Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import  HomeStack  from "./StackNavigator";

import NewDeck from "./decks/NewDeck";

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  NewDeck: NewDeck,
});

const Taps =  createAppContainer(TabNavigator);



export default class App extends React.Component {
  render() {

    return <Taps/>
  }
}
