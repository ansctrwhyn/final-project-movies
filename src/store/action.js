export const hitMovieDetail = (id) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_MOVIE_DETAIL',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitSearchMovies = (query) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitMovieVideos = (id) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_MOVIE_VIDEOS',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitSimilarMovies = (id) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_SIMILAR_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitTrendingMovies = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_TRENDING_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitNowPlaying = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_NOW_PLAYING_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitPopular = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_POPULAR_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitTopRated = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_TOP_RATED_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const hitUpcoming = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`)
            const resultData = await data.json()
            dispatch({
                type: 'SET_UPCOMING_MOVIES',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}