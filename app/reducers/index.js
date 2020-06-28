import {ADD_DECK, REMOVE_DECK, ADD_CARD,
        GET_DECK, GET_DECKS, getDeck } from '../actions/index'

export default function decks (state = {}, action){

    console.log('action', action)
    switch (action.type){

        case GET_DECKS :
            return {
                ...state,
                ...action.decks
            }
        
        case GET_DECK:
            return {
                ...state,
                ...action.deck
            }

        case ADD_DECK :
            return{
                ...state,
                ...action.deck
            }
        case REMOVE_DECK :
            
            
            const deckId = action.id
            const { [deckId] : value , ...withoutId } = state;
            // console.log('without', withoutId)
            return  {
                ...withoutId
            }
            
        case ADD_CARD:
            console.log("id", action.id)
            console.log('card' , action.card)
            return {
                ...state,
                [action.id] : {
                    ...state[action.id],
                    cards : state[action.id].cards.concat([action.card])
                }
            }
        default :
            return state

    }

}