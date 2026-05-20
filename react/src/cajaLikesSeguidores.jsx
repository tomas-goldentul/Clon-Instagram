import { useState, useEffect } from "react";
import './barraLateral.css';

function CajaLikeSeguidores(props) {
  return (
    <>
      <div className="cajaLikeSeguidores">
        <h3>{props.iconoFollow}{props.numeroFollow}</h3>
        <h3>{props.iconoLike}{props.numeroLike}</h3>

      </div>
    </>
  );
}
export default CajaLikeSeguidores;