import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { thunk } from 'redux-thunk'

const initialState = {
    searchMovies: [],
    movieDetail: [],
    movieVideos: [],
    similarMovies: [],
    trendingMovies: [],
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_MOVIES':
            return { ...state, searchMovies: action.payload }
        case 'SET_MOVIE_DETAIL':
            return { ...state, movieDetail: action.payload }
        case 'SET_MOVIE_VIDEOS':
            return { ...state, movieVideos: action.payload }
        case 'SET_SIMILAR_MOVIES':
            return { ...state, similarMovies: action.payload }
        case 'SET_TRENDING_MOVIES':
            return { ...state, trendingMovies: action.payload }
        case 'SET_NOW_PLAYING_MOVIES':
            return { ...state, nowPlayingMovies: action.payload }
        case 'SET_POPULAR_MOVIES':
            return { ...state, popularMovies: action.payload }
        case 'SET_TOP_RATED_MOVIES':
            return { ...state, topRatedMovies: action.payload }
        case 'SET_UPCOMING_MOVIES':
            return { ...state, upcomingMovies: action.payload }

        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))
export default store