import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { hitMovies } from "../store/action"

export default function CardComponent() {
    const dispatch = useDispatch()
    // const [dataMovies, setdataMovies] = useState([])
    const dataMovies = useSelector(state => state.movies)
    console.log('INI DATA MOVIES', dataMovies)

    useEffect(() => {
        getMovies()
    }, [])

    // const fetchData = async () => {
    //     try {
    //         const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=cbfdfbef4d92930f80b9063de3054e5b&language=en-US')
    //         const resultData = await data.json()
    //         setdataMovies((resultData))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const getMovies = async () => {
        dispatch(hitMovies())
    }

    return (
        <>
            <div className="container" style={{ backgroundColor: 'black' }}>
                {!dataMovies.results ? (
                    <h1>Loading...</h1>
                ) : dataMovies.results.length === 0 ? (
                    <h2>No results found</h2>
                ) : (
                    <div className="d-flex justify-content-center ms-auto">
                        <div className="row ms-4">
                            {dataMovies.results.map((el, i) => (
                                <div className="col-3 gap-3" key={i}>
                                    <Link to={`${el.id}`} style={{ textDecoration: 'none' }}>
                                        <div className="card mt-5 mb-5 shadow-sm text-white" style={{ width: "18rem", backgroundColor: '#121212' }}>
                                            <img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className="card-img-top" alt={el.title} />
                                            <div className="card-body">
                                                <h5 className="card-title" >{el.title}</h5>
                                                <p className="card-text">({el.release_date ? el.release_date.substring(0, 4) : "N/A"})</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div >
        </>
    );
}