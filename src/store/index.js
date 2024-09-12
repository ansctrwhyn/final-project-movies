import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { thunk } from 'redux-thunk'

const initialState = {
    movies: [],
    movieDetail: [],
    movieVideos: [],
    similarMovies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return { ...state, movies: action.payload }
        case 'SET_MOVIE_DETAIL':
            return { ...state, movieDetail: action.payload }
        case 'SET_MOVIE_VIDEOS':
            return { ...state, movieVideos: action.payload }
        case 'SET_SIMILAR_MOVIES':
            return { ...state, similarMovies: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))
export default store