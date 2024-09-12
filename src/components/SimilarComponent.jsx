import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function SimilarComponent() {
    const similar = useSelector(state => state.similarMovies)

    return (
        <>
            <section className="video my-5">
                <h3 className="mb-4">Similar</h3>
                {!similar.results ? (
                    <h1>Loading...</h1>
                ) : similar.results.length === 0 ? (
                    <h5>No results found</h5>
                ) : (
                    <>
                        <div className="similar-row" style={{
                            display: 'flex',
                            overflowX: 'auto',
                            gap: '16px',
                            paddingBottom: '10px',
                            whiteSpace: 'nowrap'
                        }}>
                            {similar.results.map((el, i) => (
                                <div className="similar-item" key={i} style={{
                                    minWidth: '300px',
                                    flex: '0 0 auto'
                                }}>
                                    <Link to={`/detail/${el.id}`} style={{ textDecoration: 'none', textAlign: "center" }}>
                                        <div className="card shadow-sm text-white" style={{ backgroundColor: '#121212' }}>
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
            </section>


        </>
    )
}