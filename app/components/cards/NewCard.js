import React from 'react';
import { connect } from "react-redux";
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView, } from 'react-native';
import { addCardAPI, addDeckAPI,getDecksAPI } from '../../utils/api'
import { withNavigation } from "react-navigation";

class NewCard extends React.Component {
  state = {

    question: '',
    answer: '',
  }
  
  componentDidMount() {

    const { navigation } = this.props;
    const deck = navigation.getParam('deck',) 
    console.log('deck', deck.id)
    this.setState(() => ({
        deck,
    }))
  }
  submitForm = state => {

    const { navigation } = this.props;
    const {question, answer, deck} = this.state    

    if(!state.question || !state.answer) {
      this.setState(state => ({
        ...state, 
        errorMessage: 'Your card needs a question and an answer!'
      }))
    }

    const card = {question : question , answer : answer}
    console.log('deck', deck)
    addCardAPI(deck.id, card)
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
         {/* <Button 
          title='add new card' 
          onPress={() => this.add(this.state)}
        /> */}
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


function mapStateToProps (state, {navigation}) {
  return {
      state,
      navigation
  }
}

export default withNavigation(connect(mapStateToProps)(NewCard)) 