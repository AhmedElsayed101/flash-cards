import {AsyncStorage} from 'react-native'

export const DEKCS_STORAGE_KEY = 'secret'

export function getDecks () {
    return JSON.parse(AsyncStorage.getItem(DEKCS_STORAGE_KEY))
}

export function getDeck(id) {
    decks = getDecks()
    return decks[id]
}

export function addDeck (id) {

    return AsyncStorage.mergeItem(
        DEKCS_STORAGE_KEY,
        JSON.stringify({
            [id] : {
                id,
                cards : []
            }
        })
    )
}

export function removeDeck(id) {
    const decks = getDecks()
    const deckToRemove = decks[id]
    deckToRemove = undefined
    delete deckToRemove
    AsyncStorage.setItem(
        DEKCS_STORAGE_KEY,
        JSON.stringify(decks)
    )


}

export function addCard (id, card) {
    const deck = getDeck(id)
    deck.cards.push(card)
    return AsyncStorage.mergeItem(
        DEKCS_STORAGE_KEY,
        JSON.stringify({
            [id] : deck
        })
    )
}