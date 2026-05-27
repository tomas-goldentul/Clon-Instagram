import { useState } from "react";
import NombreEmpresa from "./nombreEmpresa.jsx";
import "./Header.css";
import SearchBar from "./searchBar.jsx";
import HeaderImagenes from "./headerImagenes.jsx";

function Header() {

    const [imagenesNav] = useState([
        { id: 1, img: "/config.png" },
        { id: 2, img: "/camara.png" },
        { id: 3, img: "/send.png" },
        { id: 4, img: "/newPost.png" },
    ]);

    return (
        <div className="header">
            <NombreEmpresa nombre="Instagram" />
            <SearchBar />

            <div className="headerIcons">
                {imagenesNav.map((imag) => (
                    <HeaderImagenes key={imag.id} foto={imag.img} />
                ))}
            </div>
        </div>
    );
}

export default Header;