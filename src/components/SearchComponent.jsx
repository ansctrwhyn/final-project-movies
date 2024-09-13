import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function SearchComponent() {
    const dataMovies = useSelector(state => state.searchMovies)

    return (
        <>
            <div className="container text-white" style={{ backgroundColor: 'black' }}>
                {!dataMovies.results ? (
                    <h1>Loading...</h1>
                ) : dataMovies.results.length === 0 ? (
                    <h5>No results found</h5>
                ) : (
                    <div className="d-flex justify-content-center ms-auto">
                        <div className="row ms-4">
                            {dataMovies.results.map((el, i) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={i}>
                                    <Link to={`/detail/${el.id}`} style={{ textDecoration: 'none' }}>
                                        <div className="card mt-5 mb-5 shadow-sm text-white" style={{ height: "85%", backgroundColor: '#121212' }}>
                                            <img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className="card-img-top" alt={el.title} style={{ height: '400px', objectFit: 'cover' }} />
                                            <div className="card-body d-flex flex-column">
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