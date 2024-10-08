import { useSelector } from "react-redux"
import '../style/style.css'

export default function VideoComponent() {
    const videos = useSelector(state => state.movieVideos)

    return (
        <>
            {!videos.results ? (
                <h1>Loading...</h1>
            ) : videos.results.length === 0 ? (
                <h5>No results found</h5>
            ) : (
                <div className="container">
                    <div className="video-row" style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '16px',
                        paddingBottom: '10px'
                    }}>
                        {videos.results.map((el, i) => (
                            <div className="video-item" key={i} style={{
                                minWidth: '300px',
                                flex: '0 0 auto'
                            }}>
                                <div className="card hover-card" style={{ backgroundColor: '#121212' }}>
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
        </>
    )
}