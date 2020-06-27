export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'



export function addDeck (deck){
    return {
        type : ADD_DECK,
        deck
    }
}

export function removeDeck (id) {
    return {
        type : REMOVE_DECK,
        id
    }
}

export function addCard (card, id){
    return {
        type: ADD_CARD,
        card,
        id
    }
}


// export const GET_DECKS = 'GET_DECKS'
// export const GET_DECK = 'GET_DECK'

// export function getDecks (decks){
//     return {
//         type : GET_DECKS,
//         decks
//     }
// }

// export function getDeck(deck){
//     return {
//         type : GET_DECK,
//         deck
//     }
// }