import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hitTrendingMovies, hitNowPlaying, hitPopular, hitTopRated, hitUpcoming } from "../../store/action";
import NavbarComponent from "../../components/NavbarComponent";
import CardComponent from "../../components/CardComponent";

export default function HomePage() {
    const dispatch = useDispatch()
    const trendingMovies = useSelector(state => state.trendingMovies)
    const nowPlayingMovies = useSelector(state => state.nowPlayingMovies)
    const popularMovies = useSelector(state => state.popularMovies)
    const topRatedMovies = useSelector(state => state.topRatedMovies)
    const upcomingMovies = useSelector(state => state.upcomingMovies)

    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        getNowPlayingMovies()
    }, [])

    useEffect(() => {
        getPopularMovies()
    }, [])

    useEffect(() => {
        getTopRatedMovies()
    }, [])

    useEffect(() => {
        getUpcomingMovies()
    }, [])

    const getMovies = async () => {
        dispatch(hitTrendingMovies())
    }

    const getNowPlayingMovies = async () => {
        dispatch(hitNowPlaying())
    }

    const getPopularMovies = async () => {
        dispatch(hitPopular())
    }

    const getTopRatedMovies = async () => {
        dispatch(hitTopRated())
    }

    const getUpcomingMovies = async () => {
        dispatch(hitUpcoming())
    }

    return (
        <>
            <NavbarComponent />
            <div className="container text-white" style={{ backgroundColor: 'black', textAlign: "left" }}>
                <section className="trending my-5">
                    <h3 className="mb-4">Trending</h3>
                    <CardComponent movies={trendingMovies} />
                </section>
                <section className="now-playing my-5">
                    <h3 className="mb-4">Now Playing</h3>
                    <CardComponent movies={nowPlayingMovies} />
                </section>
                <section className="popular my-5">
                    <h3 className="mb-4">Popular</h3>
                    <CardComponent movies={popularMovies} />
                </section>
                <section className="top-rated my-5">
                    <h3 className="mb-4">Top Rated</h3>
                    <CardComponent movies={topRatedMovies} />
                </section>
                <section className="upcoming my-5">
                    <h3 className="mb-4">Upcoming</h3>
                    <CardComponent movies={upcomingMovies} />
                </section>
            </div >

        </>
    )
}
