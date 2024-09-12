import { useState } from "react";
import { Link } from "react-router-dom"

export default function NavbarComponent() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleInputSearch = (e) => {
        let inputSearch = e.target.value
        setSearchTerm(inputSearch)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ backgroundColor: '#121212' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/home">FINPRO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars" style={{ color: '#ffffff' }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto" role="search" >
                        <input className="form-control me-2" type="search" onChange={handleInputSearch} placeholder="Search.." aria-label="Search" />
                        <Link to={`/search/${searchTerm}`}>
                            <button className="btn btn-outline-light" type="submit">SEARCH</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}
