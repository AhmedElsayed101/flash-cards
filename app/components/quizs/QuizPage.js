import React , {Component} from 'react'
import { Text, View , StyleSheet, Button} from "react-native";

import { clearLocalNotification, setLocalNotification } from '../../utils/helpers';


class QuizPage extends Component {

    state = {
        id : '',
        length : 0,
        cards : '',
        currentCard: 0,
        correctAnswers: 0,
        showingAnswer: false,
        completed: false,
    }

    componentDidMount() {

        const { navigation } = this.props;
        const deck = navigation.getParam('deck',) 
        console.log('deck', deck.cards.length)
        this.setState(() => ({
            deck,
        }))
        this.setState(() => ({
            id : deck.id,
            length : deck.cards.length,
            cards : deck.cards
        }))
    }
  
    resetNotification() {
        clearLocalNotification()
        .then(setLocalNotification);
    }

    restartQuiz = () => {

        this.setState({

            showQuestion: true, // ????
            currentCard: 0,
            correctAnswers: 0,
            showingAnswer: false,
            completed: false,

          })
    }

    toggleViewAnswer = () => {

        this.setState(state => ({
            ...state,
            showingAnswer: !state.showingAnswer
          }))
      
    }

    correct = () => {

        const {cards, currentCard,} = this.state
        if(cards[currentCard+1]) {
            
            this.setState((prevState) => ({
                ...prevState,
                
                showingAnswer: false,
                correctAnswers: ++prevState.correctAnswers,
                currentCard: ++prevState.currentCard,
            }))
        } 
        else {
            this.setState(prevState => ({
                ...prevState,
                
                showingAnswer: false,
                correctAnswers: ++prevState.correctAnswers,
                completed: true,
            }))
            this.resetNotification()
        }
    }

    incorrect = () => {
        const {cards, currentCard,} = this.state
        if(cards[currentCard+1]) {
            
            this.setState((prevState) => ({
                ...prevState,
                currentCard: ++prevState.currentCard,
                showingAnswer: false,
            }))
        } 
        else {
            this.setState(prevState => ({
                ...prevState,
                showingAnswer: false,
                completed: true,
            }))
            this.resetNotification()
        }
    }
    render (){
        
        const { navigate, goBack } = this.props.navigation
        const {cards, length, completed, correctAnswers,currentCard,showingAnswer} = this.state


        if (length === 0){
            return (
                <View style = {[styles.container]}>
                    <Text> 
                        Sorry! No cards found
                    </Text>
                </View>
            )
        }

        if (completed === true) {

            return (
                <View style = {[styles.container]}>
                    <Text>Quiz Complete</Text>
                    <Text>{ correctAnswers / length * 100 + '% correct' }</Text>
                    <Button 
                        title='Back to Deck'
                        onPress={() => goBack()}
                    />
                    <Button
                        title="Play Again"
                        onPress={() => this.restartQuiz()}
                    />
                </View>
            )
        }

        console.log('decksss',  cards[2] )

        if (!completed) {
            return (
                <View>
                    <Text>Card {currentCard + 1} of {length}</Text>
                    {!showingAnswer ? 
                        <Text>Question: {cards[currentCard].question}</Text> :
                        <Text>Answer: {cards[currentCard].answer}</Text>
                    }
                    {currentCard > 0 && 
                        <Text>{currentCard > 0 && (correctAnswers / currentCard) * 100 + '% correct' }</Text>
                    }
                    <Button 
                        title={"View " + (showingAnswer ? 'Question' : 'Answer')}
                        onPress={this.toggleViewAnswer}
                    />
                    <Button
                        title="Correct"
                        onPress={this.correct}
                    />
                    <Button 
                        title="Incorrect"
                        onPress={this.incorrect}
                    />
                </View>
            )

        }

        // return (
        //     <View style = {[styles.container]}> 
        //         <Text> 
        //             QuizPage
        //         </Text>
        //         <Quiz/>
        //         <QuizNoCards/>
        //     </View>
        // )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-start",
        alignItems : "center"
    }
})


export default QuizPage


