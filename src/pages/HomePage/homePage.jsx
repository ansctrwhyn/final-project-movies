import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import CardComponent from "../../components/CardComponent";
import { useDispatch } from "react-redux";
import { hitMovies } from "../../store/action";
import { useEffect } from "react";

export default function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        dispatch(hitMovies())
    }

    return (
        <>
            <NavbarComponent />
            <CardComponent />
        </>
    )
}
