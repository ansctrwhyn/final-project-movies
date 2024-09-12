import React, { useEffect } from "react";
import NavbarComponent from "../../components/NavbarComponent";
import CardComponent from "../../components/CardComponent";
import { useParams } from "react-router-dom";
import { hitSearchMovies } from "../../store/action";

export default function SearchPage() {
    const params = useParams()
    const query = params.query
    console.log(query)

    useEffect(() => {
        hitSearchMovies(query)
    }, [])

    return (
        <><h1>ini search</h1></>
    )

    // const getMovies = async () => {
    //     dispatch(hitsearchMovies())
    // }
}