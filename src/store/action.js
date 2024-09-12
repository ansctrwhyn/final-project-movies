export const hitMovies = () => {
    return async (dispatch) => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cbfdfbef4d92930f80b9063de3054e5b')
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

export const hitMovieDetail = (id) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cbfdfbef4d92930f80b9063de3054e5b`)
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
            const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=cbfdfbef4d92930f80b9063de3054e5b`)
            const resultData = await data.json()
            console.log(resultData)
            dispatch({
                type: 'SET_MOVIE_DETAIL',
                payload: resultData
            })
        } catch (error) {
            console.log(error)
        }
    }
}