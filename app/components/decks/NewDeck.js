import React, {Component}from 'react';
import { StyleSheet, View, Button, TextInput, Text, KeyboardAvoidingView} from 'react-native';
import { addDeckAPI } from '../../utils/api'

class NewDeck extends Component {
    state = {
        id: '',
        errorMessage: ''
    }

    onSubmit = (id) => {
        
        const {navigation} = this.props; 
        console.log(id)
        if(id === '') {
            this.setState(state => ({...state, errorMessage: 'Your deck needs a title!' }))
        }
        else{
            addDeckAPI(id)
            this.setState(()=>({
                id : ''
            }))
            this.props.navigation.navigate(
                'Home',
                {
                  itemId: 86,
                  otherParam: 'anything you want here',
                }
              )
        }
    }

    render() {
        const {navigate} = this.props.navigation; 
        const {id} = this.state
        return (
        <View style={styles.container}>
            <Text style={styles.header}>
            Create a new deck
            </Text>
            <TextInput 
            style={styles.titleInput}
            placeholder="Deck Name"
            onChangeText={(id) => this.setState({id})}
            value={id}
            />
            <Button 
            title='submit'
            onPress={() => this.onSubmit(id)} 
            />
            <Text style={styles.errorMessage}>
            {this.state.errorMessage}
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleInput: {
        width: 200,
        paddingBottom: 10,
    },
    errorMessage: {
        color: 'red'
    },
    header: {
        fontSize: 27,
        paddingBottom: 30,
    },
 
})


export default NewDeck