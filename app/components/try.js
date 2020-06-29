// import React, { Component } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { connect } from "react-redux";
// import { addCard,addDeck,removeDeck } from "../actions/index";

// import { addCardAPI,addDeckAPI,removeDeckAPI,getDeckAPI,getDecksAPI,} from "../utils/api";
// import decks from "../reducers";
// class Home extends Component {
    
//     test = () => {
//         // const {state, dispatch} = this.props
//         const card = {
//             question : 'what is that',
//             answer : 'it is good'
//         }

//         // dispatch(addDeck('hello'))
//         // dispatch(addDeck('hello1'))
//         // dispatch(addDeck('hello2'))
//         // // dispatch(addCard({id : 'hello1' , card}))
//         // console.log('state', state)

      

//         // // dispatch(addCard('hello there', card ))

//         // console.log(state)
//         // addDeckAPI('hello6')
//         // addDeckAPI('hello2')
//         // addDeckAPI('hello3')
//         addCardAPI("hello6", card).catch((e)=> console.log(e))
//         // getDecksAPI().then(decks => console.log(decks))
//         // console.log(getDecksAPI())
//         // console.log('decks' ,)

//     }

//     remove = () => {
//         // const {state, dispatch} = this.props

//         // dispatch(removeDeck('hello'))
//         // console.log('state', state)
//         // removeDeckAPI('hello5')
//         // removeApi()
//         // console.log('decks' ,getDecksAPI())
//         // retrieveItem('secret').then((goals) => {console.log(goals)})

//     }
//     show = () => {
       
//         getDecksAPI()
//             .then(results => {
//                 console.log('res', results['hello6'])
//                 } )
//             .catch((e)=> {console.log(e)})
        
//         // console.log('home' ,getDecksAPI())
//     }
//     render () {

//         // this.test()
//         return (
//             <View> 
//                 <Text> Home </Text>
//                 <TouchableOpacity  onPress = {this.test}> 
//                     <Text > ADD</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity  onPress = {this.remove}> 
//                     <Text > Remove</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity  onPress = {this.show}> 
//                     <Text > Show</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }

// function mapStateToProps (state) {
//     return{
//         state
//     }
// }

// export default connect(mapStateToProps)(Home)









 // componentDidMount () {
    //     getDecksAPI()
    //         .then(results => {
    //             this.setState(() => ({
    //                 ...results
    //             }))
    //             console.log('state' ,this.state)
    //         })
    // }
    
  
    
    // componentDidMount () {
        
    //         getDecksAPI().then((decks) => console.log('deck', decks))
    //         this.props.navigation.addListener('willBlur', () => console.info("willBlur"));
    //         // this.props.navigation.addListener('focus', () => console.info("DidFocus"));
    //         // this._unsubscribe = this.props.navigation.addListener('focus', () => {
    //         //     console.info("DidFocus")
    //     //   });
      

    //     // this.forceUpdate();
    //   }

    // componentDidMount() {
    //     const { navigation } = this.props;
    //     this.focusListener = navigation.addListener("didFocus", () => {
    //         getDecksAPI().then((decks) => console.log('dsdfaklsflkaeck', decks))
    //     });
    //   }
    
    //   componentWillUnmount() {
    //     // Remove the event listener
    //     this.focusListener.remove();
    //   }



        // this.props.navigation.isFocused(() => console.log('focus'))
        // getDecksAPI().then((decks) => console.log('decks', decks))
    
         {/* <NavigationEvents
                    // onWillFocus={payload => console.log('will focus', payload)}
                    onDidFocus={() => {
                        getDecksAPI().then((decks) => console.log('deck', decks))
                        console.log('did focus')}}
                    // onWillBlur={payload => console.log('will blur', payload)}
                    // onDidBlur={payload => console.log('did blur', payload)}
                /> */}

// import { useIsFocused } from '@react-navigation/native';
// import decks from "../reducers";

// import { NavigationEvents } from 'react-navigation';
// // import { useFocusEffect } from '@react-navigation/native';
// import { withNavigation } from "react-navigation";

    // renderItem = ({item}) => {
    //     console.log('reandeItem' , {...item})
    //     return(
    //         <Deck deck = {{...item}}/>
    //     )
    // }
       {/* <FlatList
                    style={styles.deckList}
                    data= {currentState}
                    renderItem = {this.renderItem}
                /> */}
                {/* <Deck
                    deck = {currentState[deck]} 
                    key = {deck}
                /> */}

                // add = state => {

                //     const { navigation, dispatch} = this.props;
                    
                
                //     if(!state.question || !state.answer) {
                //       this.setState(state => ({
                //         ...state, 
                //         errorMessage: 'Your card needs a question and an answer!'
                //       }))
                //     } 
                //     // else if(this.props.navigation.state.params.deckAddCard) {
                //     //   this.props.navigation.state.params.deckAddCard(
                //     //     this.props.navigation.state.params.deckTitle,
                //     //     { 
                //     //       answer: state.answer, 
                //     //       question: state.question
                //     //     }
                //     //   )
                //     //   this.props.navigation.goBack()
                //     // }
                //     // const deckId = JSON.stringify(navigation.getParam('deckId', 'default value'))
                  
                //     const deckId = 'Deck'
                //     const card = {question : state.question , answer : state.answer}
                //     // dispatch(addCard(deckId, card ))
                //     addCardAPI(deckId, card).then((e) => console.log(e))
                //     getDecksAPI()
                //             .then(results => {
                //                 console.log('the Deck', results['Deck'])
                //                 } )
                //             .catch((e)=> {console.log(e)})
                //     navigation.goBack()
                          
                //   }


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
    // addDeckAPI('Deck')
    // addDeckAPI('hello2')
    // addDeckAPI('hello3')
    // const deckId = 'Deck'
    // const card = {question : state.question , answer : state.answer}
    // addCardAPI(deckId, card).then((e) => console.log(e))
    // getDecksAPI()
    //         .then(results => {
    //             console.log('the Deck', results['Deck'])
    //             } )
    //         .catch((e)=> {console.log(e)})
    // navigation.goBack()