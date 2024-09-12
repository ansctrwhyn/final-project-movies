import { useSelector } from "react-redux"

export default function VideoComponent() {
    const videos = useSelector(state => state.movieVideos)

    return (
        <>
            <section className="video my-5">
                <h3 className="mb-4">Videos</h3>
                {!videos.results ? (
                    <h1>Loading...</h1>
                ) : videos.results.length === 0 ? (
                    <h5>No results found</h5>
                ) : (
                    <div className="container">
                        <div className="video-row" style={{
                            display: 'flex',
                            overflowX: 'scroll',
                            gap: '16px',
                            paddingBottom: '10px'
                        }}>
                            {videos.results.map((el, i) => (
                                <div className="video-item" key={i} style={{
                                    minWidth: '300px',
                                    flex: '0 0 auto'
                                }}>
                                    <div className="card" style={{ backgroundColor: '#121212' }}>
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe
                                                className="embed-responsive-item"
                                                src={`https://www.youtube.com/embed/${el.key}`}
                                                title={`Video ${i + 1}`}
                                                allowFullScreen
                                                style={{ width: '100%', height: '100%' }}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}