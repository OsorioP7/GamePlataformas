import { supabase } from "../services/supabaseClient";
import { Link } from "react-router-dom";

function GameCard({ item }) {

  if (!item) return null;

  const deleteGame = async () => {

    const confirmDelete = window.confirm("¿Eliminar este videojuego?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("items")
      .delete()
      .eq("id", item.id);

    if (error) {
      console.log(error);
      alert("Error al eliminar");
    } else {
      window.location.reload();
    }

  };

  return (

    <div className="game-card">

      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>

      <div>

        <Link to={`/edit/${item.id}`}>
         <button className="btn-edit">Editar</button>
        </Link>

        <button onClick={deleteGame} className="btn-danger">
            Eliminar
        </button>

      </div>

    </div>

  );

}

export default GameCard;