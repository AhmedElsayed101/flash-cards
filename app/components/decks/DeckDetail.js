import React , {Component} from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity} from "react-native";

import { withNavigation } from "react-navigation";
import { connect } from 'react-redux'
// import { deckAddCard } from '../../actions/decks'
import { getDecksAPI } from "../../utils/api";
import { diffClamp } from 'react-native-reanimated';



class DeckDetail extends Component {
    
    state = {
        deck : '',
        toNewCardFunc : '',
        length : 0
    }

    componentDidMount() {

        const { navigation } = this.props;
        const deck = navigation.getParam('deck',) 
        const toNewCardFunc = (navigation.getParam('toNewCardFunc',))
        console.log('deck', deck)
        this.setState(() => ({
            deck,
            toNewCardFunc
        }))
        this.setState(() => ({
            length : deck.cards.length
        }))
    }

    refresh = () => {

        const {deck} = this.state
        
        getDecksAPI().then((decks) => {
            console.log('dsdfaklsflkaeck', decks[deck.id])
            this.setState(() => ({
                deck : decks[deck.id],
                length : decks[deck.id].cards.length
            }))
            console.log('state', this.state)
        })
        
    }

    render (){
        
        const {navigate} = this.props.navigation

        const {deck,length} = this.state
        console.log('desdklalflaflkaflck', length)
        return (
                <View > 
                    <Text> 
                        Please refresh to load the new cards
                    </Text>
                    <Button
                        title="Refresh"
                        onPress={this.refresh}
                    />  
        
                    <View >
                        <Text>{deck.id}</Text>
                        <Text>{length} cards</Text>
                        <Button
                            title="Add Card"
                            onPress={() => this.props.navigation.navigate(
                                'NewCard',
                                {deck : deck}
                            )}
                        />
                        <Button
                            title="Quiz"
                            onPress={() => this.props.navigation.navigate(
                                'QuizPage',
                                {deck : deck}
                            )}
                        />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color : 'black'
    }
  })
  

export default withNavigation(DeckDetail)

