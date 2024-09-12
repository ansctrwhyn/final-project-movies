import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { thunk } from 'redux-thunk'

const initialState = {
    movies: [],
    movieDetail: [],
    searchMovies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload }
        case 'SET_MOVIE_DETAIL':
            return { ...state, movieDetail: action.payload }
        case 'SET_SEARCH_MOVIES':
            return { ...state, searchMovies: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))
export default store