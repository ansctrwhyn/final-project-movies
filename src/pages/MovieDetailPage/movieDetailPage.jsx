import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { hitMovieDetail, hitMovieVideos, hitSimilarMovies } from "../../store/action"
import NavbarComponent from "../../components/NavbarComponent"
import BackdropComponent from "../../components/BackdropComponent"
import VideoComponent from "../../components/VideoComponent"
import CardComponent from "../../components/CardComponent"

export default function MovieDetailPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const similar = useSelector(state => state.similarMovies)

    useEffect(() => {
        getMovieDetail()
    }, [params.id])

    useEffect(() => {
        getMovieVideos()
    }, [params.id])

    useEffect(() => {
        getSimilarMovies()
    }, [params.id])

    const getMovieDetail = async () => {
        dispatch(hitMovieDetail(params.id))
    }

    const getMovieVideos = async () => {
        dispatch(hitMovieVideos(params.id))
    }

    const getSimilarMovies = async () => {
        dispatch(hitSimilarMovies(params.id))
    }

    return (
        <>
            <NavbarComponent />
            <div className="container text-white" style={{ textAlign: "left" }}>
                <BackdropComponent />
                <section className="video my-5">
                    <h3 className="mb-4">Videos</h3>
                    <VideoComponent />
                </section>
                <section className="similar my-5">
                    <h3 className="mb-4">Similar</h3>
                    <CardComponent movies={similar} />
                </section>
            </div>
        </>
    )
}