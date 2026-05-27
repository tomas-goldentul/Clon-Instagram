import "./headerImagenes.css";

function HeaderImagenes(props) {
  return (
    <div className="headerImagenes">
      <img src={props.foto} alt="" className="fotoNav" />
    </div>
  );
}

export default HeaderImagenes;