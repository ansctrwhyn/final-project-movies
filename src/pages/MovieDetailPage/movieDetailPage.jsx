import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavbarComponent from "../../components/NavbarComponent"
import { useDispatch, useSelector } from "react-redux"
import { hitMovieDetail } from "../../store/action"

export default function MovieDetailPage() {
    const params = useParams()
    const dispatch = useDispatch()

    // const [detailMovie, setDetailMovie] = useState([])
    const detailMovie = useSelector(state => state.movieDetail)
    console.log('INI DETAIL MOVIE', detailMovie)

    useEffect(() => {
        getMovieDetail()
    }, [])

    // const getDataApi = async (id) => {
    //     try {
    //         const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cbfdfbef4d92930f80b9063de3054e5b`)
    //         const resultData = await data.json()
    //         setDetailMovie(resultData)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getMovieDetail = async () => {
        dispatch(hitMovieDetail(params.id))
    }

    const genreList = detailMovie.genres ? detailMovie.genres.map(genre => genre.name).join(', ') : 'N/A';
    return (
        <>
            <NavbarComponent />
            <div className="container mt-5" style={{ textAlign: "left" }}>
                <div className="card text-white" style={{ backgroundColor: '#121212' }}>
                    <div className="row p-3">
                        <div className="col-3">
                            <img src={`https://image.tmdb.org/t/p/w300/${detailMovie.poster_path}`} style={{ borderRadius: '8px' }} alt="" />
                        </div>
                        <div className="col-9">
                            <h1>{detailMovie.Title}</h1>
                            <h3><i className="fa-solid fa-star" style={{ color: '#FFD43B', marginRight: '10px' }}></i>{detailMovie.vote_average}</h3>
                            <div className="detail">
                                <span>{detailMovie.release_date ? detailMovie.release_date.substring(0, 4) : "N/A"}</span>
                                <span className="mx-5">{detailMovie.runtime} min</span>
                            </div>
                            <p>{genreList}</p>
                            <div className="description my-2">
                                <h6 className="fw-bold">Description</h6>
                                <p>{detailMovie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}