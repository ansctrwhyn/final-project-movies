import { Link } from "react-router-dom"
import '../style/style.css'

export default function CardComponent({ movies }) {
    return (
        <>
            {!movies.results ? (
                <h1>Loading...</h1>
            ) : movies.results.length === 0 ? (
                <h5>No results found</h5>
            ) : (
                <>
                    <div className="card-row" style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '16px',
                        paddingBottom: '10px',
                        whiteSpace: 'nowrap'
                    }}>
                        {movies.results.map((el, i) => (
                            <div className="card-item" key={i} style={{
                                minWidth: '300px',
                                flex: '0 0 auto'
                            }}>
                                <Link to={`/detail/${el.id}`} style={{ textDecoration: 'none', textAlign: "center" }}>
                                    <div className="card shadow-sm text-white hover-card" style={{ backgroundColor: '#121212' }}>
                                        <img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} className="card-img-top" alt={el.title} style={{ height: '400px', objectFit: 'cover' }} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{el.title}</h5>
                                            <p className="card-text">({el.release_date ? el.release_date.substring(0, 4) : "N/A"})</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </>
            )}
        </>
    );
}