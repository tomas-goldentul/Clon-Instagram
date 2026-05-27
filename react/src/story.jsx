import "./story.css";
import FotoPefil from "./fotoPerfil.jsx";

function Story(props) {
  return (
    <div>
<FotoPefil foto ={props.foto}/>
      <h3>{props.username}</h3>
    </div>
  );
}

export default Story;