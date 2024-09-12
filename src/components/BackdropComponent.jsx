import { useSelector } from "react-redux"

export default function BackdropComponent() {
    const detailMovie = useSelector(state => state.movieDetail)

    const formatDuration = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return `${hours}h ${minutes}m`;
    }

    const year = detailMovie.release_date ? detailMovie.release_date.substring(0, 4) : 'N/A';
    const duration = detailMovie.runtime ? formatDuration(detailMovie.runtime) : 'N/A';
    const genreList = detailMovie.genres ? detailMovie.genres.map(genre => genre.name).join(', ') : 'N/A';

    return (<>
        <section className="backdrop my-5">
            <h1 className="mb-4">{detailMovie.title}</h1>
            <div className="card" style={{ backgroundColor: '#121212' }}>
                <div className="row p-3">
                    <div className="col-lg-8 col-md-12">
                        <img src={`https://image.tmdb.org/t/p/w780/${detailMovie.backdrop_path}`} className="img-fluid rounded d-block mx-auto" alt={detailMovie.title} />
                    </div>
                    <div className="col-lg-4 col-md-12 d-flex align-items-center">
                        <div className="w-100">
                            <h2><i className="fa-solid fa-star" style={{ color: '#FFD43B', marginRight: '10px' }}></i>{Math.round(detailMovie.vote_average * 10) / 10}</h2>
                            <div className="detail mt-2 mb-4">
                                <p>{year} | {duration} | {genreList}</p>
                            </div>
                            <div className="description my-3">
                                <em className="d-block mb-3">{detailMovie.tagline}</em>
                                <h5 className="fw-bold">Overview</h5>
                                <p>{detailMovie.overview}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
    )
}