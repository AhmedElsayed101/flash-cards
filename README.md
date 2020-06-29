# Would You Rather..?

This is my last project of  Udacity's React Fundamentals course. The goal of this project is to to practice more and write more React Native code. It's like a demo for the classic game, flash-cards, A user can also add new deck and cards , and start a quiz for a certain deck

## Getting Started

### Pre-requisites and Local Development

### To run project loacally 

* install all project dependencies with `npm install` or `yarn install`

#### Start app
* Development Mode: run `expo start`

## Data
### The data is  decks of cards stored using AsyncStorage

```
    {
        React: {
            title: 'React',
            questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
            ]
        }
    }

```
    

