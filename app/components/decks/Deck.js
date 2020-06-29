import React , {Component} from 'react'
import { Text, View , StyleSheet, TouchableOpacity} from "react-native";
import { withNavigation } from "react-navigation";

class Deck extends Component {
    render (){

        const {deckDetail} = this.props
        const {navigate} = this.props.navigation
        const {id, cards} = this.props.deck

        return (
            <View> 
                <TouchableOpacity 
                    style={styles.deck} 
                    onPress={() => deckDetail()}>
                    <Text>{id}</Text>
                    <Text>{cards.length} cards</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
      height: 100,
      paddingTop: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
})


export default withNavigation(Deck) 