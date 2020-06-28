import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addCard,addDeck,removeDeck } from "../actions/index";

import { addCardAPI,addDeckAPI,removeDeckAPI,getDeckAPI,getDecksAPI,} from "../utils/api";
// import decks from "../reducers";

import Deck from './decks/Deck'

class Home extends Component {

    state = {

    }

    componentDidMount () {
        getDecksAPI()
            .then(results => {
                this.setState(() => ({
                    ...results
                }))
            })
    }

    render () {
        
        return (
            <View> 
                <Text> Home </Text>
            </View>
        )
    }
}

function mapStateToProps (state) {
    return{
        state
    }
}

export default connect(mapStateToProps)(Home)