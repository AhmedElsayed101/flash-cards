import  React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DeckDetail from "./decks/DeckDetail";
import NewCard from "./cards/NewCard";
import QuizPage from "./quizs/QuizPage";

import Home from "./Home";



class DetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Deck : DeckDetail,
    NewCard: NewCard, 
    QuizPage : QuizPage,
    Details: DetailsScreen,

  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    render() {
      return <AppContainer />;
    }
  }
  