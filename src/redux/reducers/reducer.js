
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

export {reducer}