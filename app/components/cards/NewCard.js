import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import { addCardAPI, addDeckAPI,getDecksAPI } from '../../utils/api'

class NewCard extends React.Component {
  state = {
    question: '',
    answer: '',
  }
  submitForm = state => {

    const { navigation } = this.props;
    

    if(!state.question || !state.answer) {
      this.setState(state => ({
        ...state, 
        errorMessage: 'Your card needs a question and an answer!'
      }))
    } 
    // else if(this.props.navigation.state.params.deckAddCard) {
    //   this.props.navigation.state.params.deckAddCard(
    //     this.props.navigation.state.params.deckTitle,
    //     { 
    //       answer: state.answer, 
    //       question: state.question
    //     }
    //   )
    //   this.props.navigation.goBack()
    // }
    // const deckId = JSON.stringify(navigation.getParam('deckId', 'default value'))
    addDeckAPI('Deck')
    addDeckAPI('hello2')
    addDeckAPI('hello3')
    // const deckId = 'Deck'
    // const card = {question : state.question , answer : state.answer}
    // addCardAPI(deckId, card).then((e) => console.log(e))
    // getDecksAPI()
    //         .then(results => {
    //             console.log('the Deck', results['Deck'])
    //             } )
    //         .catch((e)=> {console.log(e)})
    // navigation.goBack()
          
  }

  add = state => {

    const { navigation } = this.props;
    

    if(!state.question || !state.answer) {
      this.setState(state => ({
        ...state, 
        errorMessage: 'Your card needs a question and an answer!'
      }))
    } 
    // else if(this.props.navigation.state.params.deckAddCard) {
    //   this.props.navigation.state.params.deckAddCard(
    //     this.props.navigation.state.params.deckTitle,
    //     { 
    //       answer: state.answer, 
    //       question: state.question
    //     }
    //   )
    //   this.props.navigation.goBack()
    // }
    // const deckId = JSON.stringify(navigation.getParam('deckId', 'default value'))
  
    const deckId = 'Deck'
    const card = {question : state.question , answer : state.answer}
    addCardAPI(deckId, card).then((e) => console.log(e))
    getDecksAPI()
            .then(results => {
                console.log('the Deck', results['Deck'])
                } )
            .catch((e)=> {console.log(e)})
    navigation.goBack()
          
  }
   
   

  render() {

    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.question}
          style={styles.input}
          placeholder='question'
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput 
          value={this.state.answer}
          style={styles.input}
          placeholder='answer'
          onChangeText={(answer) => this.setState({answer})}
        />
        <Button 
          title='submit new card' 
          onPress={() => this.submitForm(this.state)}
        />
         <Button 
          title='add new card' 
          onPress={() => this.add(this.state)}
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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    width: 200
  },
  errorMessage: {
    color: 'red'
  }
})


export default NewCard