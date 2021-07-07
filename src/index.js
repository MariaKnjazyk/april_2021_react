import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux'


const initialState = {
    counter: {
        value: 0
    },
    posts: {
        value:[],
        isEmpty: true
    },
    users: {
        value:[],
        isEmpty: true
    },
    comments: {
        value:[],
        isEmpty: true
    },
    photos: {
        value:[],
        isEmpty: true
    },
    todos: {
        value:[],
        isEmpty: true
    },
    albums: {
        value:[],
        isEmpty: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }

        case 'INC_CAST': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + +(action.payload)
                }
            }
        }

        case 'DEC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value - 1
                }
            }
        }

        case 'RES': {
            return {
                ...state,
                counter: {
                    value: 0
                }
            }
        }

        case 'ADD_POSTS': {
            return {
                ...state,
                posts: {
                    value: action.payload,
                    isEmpty: false
                }
            }
        }

        case 'ADD_USERS': {
            return {
                ...state,
                users: {
                    value: action.payload,
                    isEmpty: false
                }
            }
        }
        case 'ADD_COMMENTS': {
            return {
                ...state,
                comments: {
                    value: action.payload,
                    isEmpty: false
                }
            }
        }

        case 'ADD_PHOTOS': {
            return {
                ...state,
                photos: {
                    value: action.payload,
                    isEmpty: false
                }
            }
        }

        case 'ADD_TODOS': {
            return {
                ...state,
                todos: {
                    value: action.payload,
                    isEmpty: false
                }
            }
        }

        case 'ADD_ALBUMS': {
            return {
                ...state,
                albums: {
                    value: action.payload,
                    isEmpty: false
                }
            }
        }



        default:
            return state;
    }
}

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
