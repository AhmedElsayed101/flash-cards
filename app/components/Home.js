import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { addCard,addDeck,removeDeck } from "../actions/index";

import { getDecksAPI,} from "../utils/api";
// import decks from "../reducers";

import Deck from './decks/Deck'
import NewDeck from './decks/NewDeck'

import  App from "./tryNav";

class Home extends Component {
    // state = {

    // }

    // componentDidMount () {
    //     getDecksAPI()
    //         .then(results => {
    //             this.setState(() => ({
    //                 ...results
    //             }))
    //             console.log('state' ,this.state)
    //         })
    // }
    componentDidMount () {
        getDecksAPI().then((decks) => console.log('deck', decks))
        this.forceUpdate();
      }
    
      render() {
        return (
           
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.navigate(
                'NewCard',
                {
                  itemId: 86,
                  otherParam: 'anything you want here',
                }
              )}
            />
          </View>
        );
      }
}

export default Home