import {AsyncStorage} from 'react-native'
import decks from '../reducers'

export const DEKCS_STORAGE_KEY = 'secret'

export async function getDecksAPI () {
    const result = JSON.parse(await AsyncStorage.getItem(DEKCS_STORAGE_KEY))
    // console.log('results', result)
    return result
}

export async function getDeckAPI(id) {
    const decks = await getDecksAPI()
    // console.log('decks', decks)
    console.log('id', id)
    // console.log('apiDEc', decks[id])
    return decks[id]
}

export function addDeckAPI (id) {

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

export async function removeDeckAPI(id) {
    const decks = await getDecksAPI()
    const deckId = id
    const { [deckId] : value , ...withoutId } = decks;
    // const deckToRemove = decks[id]
    // deckToRemove = undefined
    // delete deckToRemove
    AsyncStorage.setItem(
        DEKCS_STORAGE_KEY,
        JSON.stringify(withoutId)
    )


}

export async function addCardAPI (id, card) {
    console.log('card', card)
    const deck = await getDeckAPI(id)
    console.log('deck', deck)
    deck.cards.push(card)
    return AsyncStorage.mergeItem(
        DEKCS_STORAGE_KEY,
        JSON.stringify({
            [id] : deck
        })
    )
}

export async function removeApi () {
    return await AsyncStorage.removeItem(DEKCS_STORAGE_KEY)
}