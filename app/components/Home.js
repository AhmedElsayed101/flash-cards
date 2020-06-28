import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addCard,addDeck,removeDeck } from "../actions/index";

import { addCardAPI,addDeckAPI,removeDeckAPI,getDeckAPI,getDecksAPI,} from "../utils/api";
import decks from "../reducers";
class Home extends Component {
    
    test = () => {
        // const {state, dispatch} = this.props
        const card = {
            question : 'what is that',
            answer : 'it is good'
        }

        // dispatch(addDeck('hello'))
        // dispatch(addDeck('hello1'))
        // dispatch(addDeck('hello2'))
        // // dispatch(addCard({id : 'hello1' , card}))
        // console.log('state', state)

      

        // // dispatch(addCard('hello there', card ))

        // console.log(state)
        // addDeckAPI('hello6')
        // addDeckAPI('hello2')
        // addDeckAPI('hello3')
        addCardAPI("hello6", card).catch((e)=> console.log(e))
        // getDecksAPI().then(decks => console.log(decks))
        // console.log(getDecksAPI())
        // console.log('decks' ,)

    }

    remove = () => {
        // const {state, dispatch} = this.props

        // dispatch(removeDeck('hello'))
        // console.log('state', state)
        // removeDeckAPI('hello5')
        // removeApi()
        // console.log('decks' ,getDecksAPI())
        // retrieveItem('secret').then((goals) => {console.log(goals)})

    }
    show = () => {
       
        getDecksAPI()
            .then(results => {
                console.log('res', results['hello6'])
                } )
            .catch((e)=> {console.log(e)})
        
        // console.log('home' ,getDecksAPI())
    }
    render () {

        // this.test()
        return (
            <View> 
                <Text> Home </Text>
                <TouchableOpacity  onPress = {this.test}> 
                    <Text > ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress = {this.remove}> 
                    <Text > Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress = {this.show}> 
                    <Text > Show</Text>
                </TouchableOpacity>
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