import React, { Component, useEffect } from "react";
import { View, Text, Button,FlatList,TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import { connect } from "react-redux";
// import { addCard,addDeck,removeDeck } from "../actions/index";

import { getDecksAPI,removeApi} from "../utils/api";
import Deck from './decks/Deck'

class Home extends Component {
    state = {

    }

    componentDidMount() {
        getDecksAPI().then((decks) => {
            console.log('dsdfaklsflkaeck', decks)
            this.setState(() => ({
                ...decks
            }))
            console.log('state', this.state)
        })
    }

    refresh = () => {
        getDecksAPI().then((decks) => {
            console.log('dsdfaklsflkaeck', decks)
            this.setState(() => ({
                ...decks
            }))
            console.log('state', this.state)
        })
    }
    render() {
        
        const {navigate} = this.props.navigation
        const currentState = this.state

        return (
            
            <View style={styles.container}>   
                <Button
                    title="Refresh"
                    onPress={this.refresh}
                />      
                <Text>Please refresh to load the new decks</Text>
                <Button
                    title="Remove all Decks"
                    onPress={() => removeApi()}
                />
                <Text>You will need to restart the app</Text>
                <ScrollView>
                    {Object.keys(currentState).map((deck) => {
                        console.log('key',currentState[deck])
                        return (
                            <Deck
                                key = {deck}
                                deck = {currentState[deck]}
                                deckDetail = {() => navigate(
                                    'DeckDetail',
                                    {  
                                        deck: currentState[deck],
                                        toNewCardFunc : () => navigate('NewCard', {deckId : deck})
                                    },
                                )}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        );
        }
}

const styles = StyleSheet.create({
    title: {
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 24
    },
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})

function mapStateToProps (state) {
    return {
        state
    }
}

export default (connect(mapStateToProps)(Home)) 