/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NavbarComponent from "../../components/NavbarComponent";
import SearchComponent from "../../components/SearchComponent";
import { useParams } from "react-router-dom";
import { hitSearchMovies } from "../../store/action";
import { useDispatch } from "react-redux";

export default function SearchPage() {
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getSearchMovies()
    }, [params.query])

    const getSearchMovies = async () => {
        dispatch(hitSearchMovies(params.query))
    }

    return (
        <>
            <NavbarComponent />
            <SearchComponent />
        </>

    )


}