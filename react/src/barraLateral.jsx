import { useState, useEffect } from "react";
import FotoPerfil from './fotoPerfil.jsx'
import './barraLateral.css'
import CajaLikeSeguidores from './cajaLikesSeguidores.jsx'
import OpcionesBarraLateral from './opcionesBarraLateral.jsx'

function BarraLateral() {
  return (
    <>
      <div class="BarraLateral">
        <FotoPerfil foto={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrqw-QTCLrK4VmDg9NHXopnnjqhqv9HTdiQ&s"}/>
        <h2 class="nombre">Javier Martinez</h2>
        <h3>nobcavs911</h3>
        <div>
           <CajaLikeSeguidores iconoFollow="👨" numeroFollow="121k"  iconoLike="❤️" numeroLike="900k"/>
        </div>
        <OpcionesBarraLateral/>
      </div>
    </>
  );
}
export default BarraLateral;