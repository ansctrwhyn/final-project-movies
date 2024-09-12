import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavbarComponent from "../../components/NavbarComponent"
import { useDispatch, useSelector } from "react-redux"
import { hitMovieDetail, hitMovieVideos, hitSimilarMovies } from "../../store/action"
import { Link } from "react-router-dom"
import BackdropComponent from "../../components/BackdropComponent"
import VideoComponent from "../../components/VideoComponent"
import SimilarComponent from "../../components/SimilarComponent"

export default function MovieDetailPage() {
    const params = useParams()
    const dispatch = useDispatch()

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
                <VideoComponent />
                <SimilarComponent />
            </div>
        </>
    )
}